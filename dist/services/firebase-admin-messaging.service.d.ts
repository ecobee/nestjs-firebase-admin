import * as admin from 'firebase-admin';
export declare class FirebaseMessagingService {
  readonly app: admin.app.App;
  constructor(app: admin.app.App);
  get messaging(): import('firebase-admin/lib/messaging/messaging').Messaging;
  send(message: admin.messaging.Message, dryRun?: boolean): Promise<string>;
  sendAll(messages: admin.messaging.Message[], dryRun?: boolean): Promise<admin.messaging.BatchResponse>;
  sendMulticast(message: admin.messaging.MulticastMessage, dryRun?: boolean): Promise<admin.messaging.BatchResponse>;
  sendToDevice(
    registrationToken: string | string[],
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<admin.messaging.MessagingDevicesResponse>;
  sendToDeviceGroup(
    notificationKey: string,
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<admin.messaging.MessagingDeviceGroupResponse>;
  sendToTopic(
    topic: string,
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<admin.messaging.MessagingTopicResponse>;
  sendToCondition(
    condition: string,
    payload: admin.messaging.MessagingPayload,
    options?: admin.messaging.MessagingOptions,
  ): Promise<admin.messaging.MessagingConditionResponse>;
  subscribeToTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<admin.messaging.MessagingTopicManagementResponse>;
  unsubscribeFromTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<admin.messaging.MessagingTopicManagementResponse>;
}
