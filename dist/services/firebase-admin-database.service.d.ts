/// <reference types="node" />
import * as admin from 'firebase-admin';
import { FirebaseApp } from '@firebase/app-types';
export declare class FirebaseDatabaseService implements admin.database.Database {
    readonly _app: admin.app.App;
    app: FirebaseApp;
    constructor(_app: admin.app.App);
    get database(): import("firebase-admin/lib/database/database").Database;
    goOffline(): void;
    goOnline(): void;
    ref(path?: string | admin.database.Reference): admin.database.Reference;
    refFromURL(url: string): admin.database.Reference;
    getRules(): Promise<string>;
    getRulesJSON(): Promise<object>;
    setRules(source: string | object | Buffer): Promise<void>;
    useEmulator(host: string, port: number): void;
}
