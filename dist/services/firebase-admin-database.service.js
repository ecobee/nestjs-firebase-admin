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
exports.FirebaseDatabaseService = void 0;
const common_1 = require('@nestjs/common');
const admin = require('firebase-admin');
let FirebaseDatabaseService = class FirebaseDatabaseService {
  constructor(_app) {
    this._app = _app;
  }
  get database() {
    if (!this._app) {
      throw new Error('Firebase instance is undefined.');
    }
    return admin.database(this.app);
  }
  goOffline() {
    return this.database.goOffline();
  }
  goOnline() {
    return this.database.goOnline();
  }
  ref(path) {
    return this.database.ref(path);
  }
  refFromURL(url) {
    return this.database.refFromURL(url);
  }
  getRules() {
    return this.database.getRules();
  }
  getRulesJSON() {
    return this.database.getRulesJSON();
  }
  setRules(source) {
    return this.database.setRules(source);
  }
  useEmulator(host, port) {
    this.database.useEmulator(host, port);
  }
};
FirebaseDatabaseService = __decorate(
  [common_1.Injectable(), __metadata('design:paramtypes', [Object])],
  FirebaseDatabaseService,
);
exports.FirebaseDatabaseService = FirebaseDatabaseService;
