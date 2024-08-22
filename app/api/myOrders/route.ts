import { NextResponse, type NextRequest } from 'next/server';
import { get, ref, child } from "firebase/database";
import { db } from '@/lib/firebase';

export async function GET(req: NextRequest) {
    try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `users/userId`));
        if (snapshot.exists()) {
            const userData = snapshot.val();
            console.log('User data:', userData);
            return NextResponse.json({ userData }, { status: 200 });
        } else {
            return NextResponse.json({ message: "No data available" }, { status: 404 });
        }
    } catch (error) {
        console.error('Error getting Firebase data:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
