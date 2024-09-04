'use client'
import { UserCircleIcon } from "@heroicons/react/24/outline"
import { FirebaseClient } from "@/lib/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuth } from "@/hooks/useAuth";
import { setCookie } from 'cookies-next';

export default function Login() {
    /* TODO: refactor firebase init */
    const tmpClient = FirebaseClient;
    const auth = getAuth();
    const { setUser, user } = useAuth();

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const userData = result.user;
            setCookie('user', userData);
            setUser(userData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button onClick={signInWithGoogle} className="rounded-full hover:bg-blue-200 py-2">
            <UserCircleIcon className="w-8 h-8" />
        </button>
    );
}