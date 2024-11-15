import { DynamicModule } from '@nestjs/common';
import { FirebaseAdminModuleAsyncOptions, FirebaseAdminModuleOptions } from './firebase-admin.interface';
export declare class FirebaseAdminCoreModule {
    static forRoot(options: FirebaseAdminModuleOptions): DynamicModule;
    private static createProviders;
    static forRootAsync(options: FirebaseAdminModuleAsyncOptions): DynamicModule;
    private static createAsyncProviders;
}
