"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseMessagingService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
function convertOptionsToAndroid(options) {
    switch (options === null || options === void 0 ? void 0 : options.priority) {
        case 'high':
            return { priority: 'high' };
        case 'normal':
            return { priority: 'normal' };
        default:
            return undefined;
    }
}
function convertOptionsToApns(options) {
    if (!(options === null || options === void 0 ? void 0 : options.contentAvailable))
        return undefined;
    return {
        payload: {
            aps: {
                'content-available': 1,
            },
        },
    };
}
let FirebaseMessagingService = class FirebaseMessagingService {
    constructor(app) {
        this.app = app;
    }
    get messaging() {
        if (!this.app) {
            throw new Error('Firebase instance is undefined.');
        }
        return admin.messaging(this.app);
    }
    send(message, dryRun) {
        return this.messaging.send(message, dryRun);
    }
    sendAll(messages, dryRun) {
        return this.messaging.sendEach(messages, dryRun);
    }
    sendMulticast(message, dryRun) {
        return this.messaging.sendEachForMulticast(message, dryRun);
    }
    sendToDevice(registrationToken, payload, options) {
        let tokens = [];
        if (typeof tokens == 'string') {
            tokens = [registrationToken];
        }
        else {
            tokens = [...registrationToken];
        }
        const message = {
            tokens,
            notification: payload.notification,
            android: convertOptionsToAndroid(options),
            apns: convertOptionsToApns(options),
        };
        return admin.messaging().sendEachForMulticast(message);
    }
    sendToDeviceGroup(notificationKey, payload, options) {
        const message = {
            token: notificationKey,
            notification: payload.notification,
            android: convertOptionsToAndroid(options),
            apns: convertOptionsToApns(options),
        };
        return admin.messaging().send(message);
    }
    sendToTopic(topic, payload, options) {
        const message = {
            topic,
            notification: payload.notification,
            data: payload.data,
            android: convertOptionsToAndroid(options),
            apns: convertOptionsToApns(options),
        };
        return this.messaging.send(message);
    }
    sendToCondition(condition, payload, options) {
        const message = {
            condition,
            notification: payload.notification,
            data: payload.data,
            android: convertOptionsToAndroid(options),
            apns: convertOptionsToApns(options),
        };
        return this.messaging.send(message);
    }
    subscribeToTopic(registrationTokens, topic) {
        return this.messaging.subscribeToTopic(registrationTokens, topic);
    }
    unsubscribeFromTopic(registrationTokens, topic) {
        return this.messaging.unsubscribeFromTopic(registrationTokens, topic);
    }
};
FirebaseMessagingService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], FirebaseMessagingService);
exports.FirebaseMessagingService = FirebaseMessagingService;
