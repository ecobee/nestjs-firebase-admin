import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

import {
  MulticastMessage,
  Message,
  BatchResponse,
  MessagingOptions,
  AndroidConfig,
  ApnsConfig,
} from 'firebase-admin/messaging';

function convertOptionsToAndroid(options?: MessagingOptions): AndroidConfig {
  switch (options?.priority) {
    case 'high':
      return { priority: 'high' };
    case 'normal':
      return { priority: 'normal' };
    default:
      return undefined;
  }
}

function convertOptionsToApns(options?: MessagingOptions): ApnsConfig {
  if (!options?.contentAvailable) return undefined;

  return {
    payload: {
      aps: {
        'content-available': 1,
      },
    },
  };
}

@Injectable()
export class FirebaseMessagingService {
  constructor(public readonly app: admin.app.App) {}

  get messaging() {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    return admin.messaging(this.app);
  }

  send(message: admin.messaging.Message, dryRun?: boolean): Promise<string> {
    return this.messaging.send(message, dryRun);
  }
  sendAll(messages: admin.messaging.Message[], dryRun?: boolean): Promise<admin.messaging.BatchResponse> {
    return this.messaging.sendEach(messages, dryRun);
  }
  sendMulticast(message: admin.messaging.MulticastMessage, dryRun?: boolean): Promise<admin.messaging.BatchResponse> {
    return this.messaging.sendEachForMulticast(message, dryRun);
  }

  sendToDevice(
    registrationToken: string | string[],
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<BatchResponse> {
    let tokens = [];
    if (typeof tokens == 'string') {
      tokens = [registrationToken];
    } else {
      tokens = [...registrationToken];
    }

    const message: MulticastMessage = {
      tokens,
      notification: payload.notification,
      android: convertOptionsToAndroid(options),
      apns: convertOptionsToApns(options),
    };

    return admin.messaging().sendEachForMulticast(message);
  }
  sendToDeviceGroup(
    notificationKey: string,
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<string> {
    const message: Message = {
      token: notificationKey,
      notification: payload.notification,
      android: convertOptionsToAndroid(options),
      apns: convertOptionsToApns(options),
    };

    return admin.messaging().send(message);
  }
  sendToTopic(
    topic: string,
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<string> {
    const message: Message = {
      topic,
      notification: payload.notification,
      data: payload.data,
      android: convertOptionsToAndroid(options),
      apns: convertOptionsToApns(options),
    };

    return this.messaging.send(message);
  }
  sendToCondition(
    condition: string,
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<string> {
    const message: Message = {
      condition,
      notification: payload.notification,
      data: payload.data,
      android: convertOptionsToAndroid(options),
      apns: convertOptionsToApns(options),
    };

    return this.messaging.send(message);
  }

  subscribeToTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<admin.messaging.MessagingTopicManagementResponse> {
    return this.messaging.subscribeToTopic(registrationTokens, topic);
  }
  unsubscribeFromTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<admin.messaging.MessagingTopicManagementResponse> {
    return this.messaging.unsubscribeFromTopic(registrationTokens, topic);
  }
}
