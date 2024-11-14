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
exports.FirebaseFirestoreService = void 0;
const common_1 = require('@nestjs/common');
const admin = require('firebase-admin');
let FirebaseFirestoreService = class FirebaseFirestoreService {
  constructor(app) {
    this.app = app;
  }
  get databaseId() {
    return this.app.database.toString();
  }
  get firestore() {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    return admin.firestore(this.app);
  }
  settings(settings) {
    return this.firestore.settings(settings);
  }
  collection(collectionPath) {
    return this.firestore.collection(collectionPath);
  }
  doc(documentPath) {
    return this.firestore.doc(documentPath);
  }
  collectionGroup(collectionId) {
    return this.firestore.collectionGroup(collectionId);
  }
  getAll(...documentRefsOrReadOptions) {
    return this.firestore.getAll(...documentRefsOrReadOptions);
  }
  terminate() {
    return this.firestore.terminate();
  }
  listCollections() {
    return this.firestore.listCollections();
  }
  runTransaction(updateFunction, transactionOptions) {
    return this.firestore.runTransaction(updateFunction, transactionOptions);
  }
  batch() {
    return this.firestore.batch();
  }
  bulkWriter(options) {
    return this.firestore.bulkWriter(options);
  }
  bundle(bundleId) {
    return this.firestore.bundle(bundleId);
  }
  recursiveDelete(ref, bulkWriter) {
    return this.firestore.recursiveDelete(ref, bulkWriter);
  }
};
FirebaseFirestoreService = __decorate(
  [common_1.Injectable(), __metadata('design:paramtypes', [Object])],
  FirebaseFirestoreService,
);
exports.FirebaseFirestoreService = FirebaseFirestoreService;
