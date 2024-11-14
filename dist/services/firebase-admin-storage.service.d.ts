import * as admin from 'firebase-admin';
import { Bucket } from '@google-cloud/storage';
export declare class FirebaseStorageService {
  readonly app: admin.app.App;
  constructor(app: admin.app.App);
  get storage(): import('firebase-admin/lib/storage/storage').Storage;
  bucket(name?: string): Bucket;
}
