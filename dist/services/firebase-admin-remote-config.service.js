'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.FirebaseRemoteConfigService = void 0;
const common_1 = require('@nestjs/common');
const admin = require('firebase-admin');
let FirebaseRemoteConfigService = class FirebaseRemoteConfigService {
  constructor(app) {
    this.app = app;
  }
  get remoteConfig() {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    return admin.remoteConfig(this.app);
  }
  getTemplate() {
    return this.remoteConfig.getTemplate();
  }
  getTemplateAtVersion(versionNumber) {
    return this.remoteConfig.getTemplateAtVersion(versionNumber);
  }
  validateTemplate(template) {
    return this.remoteConfig.validateTemplate(template);
  }
  publishTemplate(template, options) {
    return this.remoteConfig.publishTemplate(template, options);
  }
  createTemplateFromJSON(json) {
    return this.remoteConfig.createTemplateFromJSON(json);
  }
  rollback(versionNumber) {
    return this.remoteConfig.rollback(versionNumber);
  }
  listVersions(options) {
    return this.remoteConfig.listVersions(options);
  }
};
FirebaseRemoteConfigService = __decorate(
  [common_1.Injectable(), __metadata('design:paramtypes', [Object])],
  FirebaseRemoteConfigService,
);
exports.FirebaseRemoteConfigService = FirebaseRemoteConfigService;
