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
var FirebaseAdminCoreModule_1;
Object.defineProperty(exports, '__esModule', { value: true });
exports.FirebaseAdminCoreModule = void 0;
const common_1 = require('@nestjs/common');
const admin = require('firebase-admin');
const firebase_admin_constant_1 = require('./firebase-admin.constant');
const services_1 = require('./services');
const PROVIDERS = [
  services_1.FirebaseAuthenticationService,
  services_1.FirebaseMessagingService,
  services_1.FirebaseRemoteConfigService,
  services_1.FirebaseDatabaseService,
  services_1.FirebaseFirestoreService,
  services_1.FirebaseStorageService,
];
let FirebaseAdminCoreModule = (FirebaseAdminCoreModule_1 = class FirebaseAdminCoreModule {
  static forRoot(options) {
    const firebaseAdminModuleOptions = {
      provide: firebase_admin_constant_1.FIREBASE_ADMIN_MODULE_OPTIONS,
      useValue: options,
    };
    const app = admin.apps.length === 0 ? admin.initializeApp(options) : admin.apps[0];
    const providers = app === null ? [] : this.createProviders(app);
    return {
      module: FirebaseAdminCoreModule_1,
      providers: [firebaseAdminModuleOptions, ...providers],
      exports: [...PROVIDERS],
    };
  }
  static createProviders(app) {
    return PROVIDERS.map((ProviderService) => ({
      provide: ProviderService,
      useFactory: () => new ProviderService(app),
    }));
  }
  static forRootAsync(options) {
    const firebaseAdminModuleOptions = {
      provide: firebase_admin_constant_1.FIREBASE_ADMIN_MODULE_OPTIONS,
      useFactory: options.useFactory,
      inject: options.inject || [],
    };
    const providers = this.createAsyncProviders();
    return {
      module: FirebaseAdminCoreModule_1,
      imports: options.imports,
      providers: [firebaseAdminModuleOptions, ...providers],
      exports: [...PROVIDERS],
    };
  }
  static createAsyncProviders() {
    return PROVIDERS.map((ProviderService) => ({
      provide: ProviderService,
      useFactory: (options) => {
        const app = admin.apps.length === 0 ? admin.initializeApp(options) : admin.apps[0];
        return new ProviderService(app);
      },
      inject: [firebase_admin_constant_1.FIREBASE_ADMIN_MODULE_OPTIONS],
    }));
  }
});
FirebaseAdminCoreModule = FirebaseAdminCoreModule_1 = __decorate(
  [common_1.Global(), common_1.Module({})],
  FirebaseAdminCoreModule,
);
exports.FirebaseAdminCoreModule = FirebaseAdminCoreModule;
