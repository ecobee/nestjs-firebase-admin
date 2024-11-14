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
exports.FirebaseAuthenticationService = void 0;
const common_1 = require('@nestjs/common');
const admin = require('firebase-admin');
let FirebaseAuthenticationService = class FirebaseAuthenticationService {
  constructor(app) {
    this.app = app;
  }
  get auth() {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    return admin.auth(this.app);
  }
  tenantManager() {
    return this.auth.tenantManager();
  }
  createCustomToken(uid, developerClaims) {
    return this.auth.createCustomToken(uid, developerClaims);
  }
  createUser(properties) {
    return this.auth.createUser(properties);
  }
  deleteUser(uid) {
    return this.auth.deleteUser(uid);
  }
  deleteUsers(uids) {
    return this.auth.deleteUsers(uids);
  }
  getUser(uid) {
    return this.auth.getUser(uid);
  }
  getUserByEmail(email) {
    return this.auth.getUserByEmail(email);
  }
  getUserByPhoneNumber(phoneNumber) {
    return this.auth.getUserByPhoneNumber(phoneNumber);
  }
  getUserByProviderUid(providerId, uid) {
    return this.auth.getUserByProviderUid(providerId, uid);
  }
  getUsers(identifiers) {
    return this.auth.getUsers(identifiers);
  }
  listUsers(maxResults, pageToken) {
    return this.auth.listUsers(maxResults, pageToken);
  }
  updateUser(uid, properties) {
    return this.auth.updateUser(uid, properties);
  }
  verifyIdToken(idToken, checkRevoked) {
    return this.auth.verifyIdToken(idToken, checkRevoked);
  }
  setCustomUserClaims(uid, customUserClaims) {
    return this.auth.setCustomUserClaims(uid, customUserClaims);
  }
  revokeRefreshTokens(uid) {
    return this.auth.revokeRefreshTokens(uid);
  }
  importUsers(users, options) {
    return this.auth.importUsers(users, options);
  }
  createSessionCookie(idToken, sessionCookieOptions) {
    return this.auth.createSessionCookie(idToken, sessionCookieOptions);
  }
  verifySessionCookie(sessionCookie, checkForRevocation) {
    return this.auth.verifySessionCookie(sessionCookie, checkForRevocation);
  }
  generatePasswordResetLink(email, actionCodeSettings) {
    return this.auth.generatePasswordResetLink(email, actionCodeSettings);
  }
  generateEmailVerificationLink(email, actionCodeSettings) {
    return this.auth.generateEmailVerificationLink(email, actionCodeSettings);
  }
  generateSignInWithEmailLink(email, actionCodeSettings) {
    return this.auth.generateSignInWithEmailLink(email, actionCodeSettings);
  }
  listProviderConfigs(options) {
    return this.auth.listProviderConfigs(options);
  }
  getProviderConfig(providerId) {
    return this.auth.getProviderConfig(providerId);
  }
  deleteProviderConfig(providerId) {
    return this.auth.deleteProviderConfig(providerId);
  }
  updateProviderConfig(providerId, updatedConfig) {
    return this.auth.updateProviderConfig(providerId, updatedConfig);
  }
  createProviderConfig(config) {
    return this.auth.createProviderConfig(config);
  }
};
FirebaseAuthenticationService = __decorate(
  [common_1.Injectable(), __metadata('design:paramtypes', [Object])],
  FirebaseAuthenticationService,
);
exports.FirebaseAuthenticationService = FirebaseAuthenticationService;
