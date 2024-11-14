import * as admin from 'firebase-admin';
export declare class FirebaseFirestoreService implements FirebaseFirestore.Firestore {
    readonly app: admin.app.App;
    constructor(app: admin.app.App);
    get databaseId(): string;
    get firestore(): admin.firestore.Firestore;
    settings(settings: FirebaseFirestore.Settings): void;
    collection(collectionPath: string): FirebaseFirestore.CollectionReference;
    doc(documentPath: string): FirebaseFirestore.DocumentReference;
    collectionGroup(collectionId: string): FirebaseFirestore.CollectionGroup;
    getAll(...documentRefsOrReadOptions: (FirebaseFirestore.DocumentReference | FirebaseFirestore.ReadOptions)[]): Promise<FirebaseFirestore.DocumentSnapshot[]>;
    terminate(): Promise<void>;
    listCollections(): Promise<FirebaseFirestore.CollectionReference[]>;
    runTransaction<T>(updateFunction: (transaction: FirebaseFirestore.Transaction) => Promise<T>, transactionOptions?: {
        maxAttempts?: number;
    }): Promise<T>;
    batch(): FirebaseFirestore.WriteBatch;
    bulkWriter(options?: FirebaseFirestore.BulkWriterOptions): FirebaseFirestore.BulkWriter;
    bundle(bundleId?: string): FirebaseFirestore.BundleBuilder;
    recursiveDelete(ref: FirebaseFirestore.CollectionReference<unknown> | FirebaseFirestore.DocumentReference<unknown>, bulkWriter?: FirebaseFirestore.BulkWriter): Promise<void>;
}
