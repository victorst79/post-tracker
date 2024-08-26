import { NextResponse, type NextRequest } from 'next/server';
import { get, ref, child } from "firebase/database";
import { db } from '@/lib/firebase';

import { UserDataFirebase } from '@/interfaces/API/Firebase.interface';

export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
        return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `users/${userId}`));
        if (snapshot.exists()) {
            const userData: UserDataFirebase = snapshot.val();;
            return NextResponse.json({ orders: userData?.orders }, { status: 200 });
        } else {
            return NextResponse.json({ message: "No data available" }, { status: 404 });
        }
    } catch (error) {
        console.error('Error getting Firebase data:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
