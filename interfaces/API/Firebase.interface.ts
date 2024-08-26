import { Order } from '../Order.interface';

export interface UserDataFirebase {
    info: FirebaseUser;
    orders: {
        [orderId: string]: Order;
    };
}

interface ProviderData {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string;
}

interface StsTokenManager {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
}

export interface FirebaseUser {
    uid: string;
    email: string;
    emailVerified: boolean;
    displayName: string;
    isAnonymous: boolean;
    photoURL: string;
    providerData: ProviderData[];
    stsTokenManager: StsTokenManager;
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
}