import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    updatePassword,
    sendEmailVerification,
} from "firebase/auth";

// Create a user with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Sign in with Google
export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
};

// Sign out
export const doSignOut = async () => {
    return auth.signOut();
};

// Send password reset email
export const doPasswordReset = async (email) => {
    return sendPasswordResetEmail(auth, email);
};

// Update user password
export const doPasswordResetChange = async (password) => {
    if (auth.currentUser) {
        return updatePassword(auth.currentUser, password);
    } else {
        throw new Error("No user is currently signed in.");
    }
};

// Send email verification
export const doSendEmailVerification = async () => {
    if (auth.currentUser) {
        return sendEmailVerification(auth.currentUser, {
            url: `${window.location.origin}/home`,
        });
    } else {
        throw new Error("No user is currently signed in.");
    }
};
