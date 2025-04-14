import * as admin from 'firebase-admin';
import type { ModuleMetadata } from '@nestjs/common';
export interface FirebaseAdminModuleOptions extends admin.AppOptions {
}
export interface FirebaseAdminModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    name?: string;
    useFactory?: (...args: any[]) => Promise<FirebaseAdminModuleOptions> | FirebaseAdminModuleOptions;
    inject?: any[];
}
