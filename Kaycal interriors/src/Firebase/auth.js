import { auth } from "./config"; 
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
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        console.error("Error creating user with email and password:", error);
        throw error; 
    }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        console.error("Error signing in with email and password:", error);
        throw error; 
    }
};


export const doSignInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result;
    } catch (error) {
        console.error("Error signing in with Google:", error);
        throw error; 
    }
};

export const doSignOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error("Error signing out:", error);
        throw error; 
    }
};

export const doPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        console.error("Error sending password reset email:", error);
        throw error;
    }
};

export const doPasswordResetChange = async (password) => {
    try {
        if (auth.currentUser) {
            await updatePassword(auth.currentUser, password);
        } else {
            throw new Error("No user is currently signed in.");
        }
    } catch (error) {
        console.error("Error updating password:", error);
        throw error; 
    }
};

export const doSendEmailVerification = async () => {
    try {
        if (auth.currentUser) {
            await sendEmailVerification(auth.currentUser, {
                url: `${window.location.origin}/home`,
            });
        } else {
            throw new Error("No user is currently signed in.");
        }
    } catch (error) {
        console.error("Error sending email verification:", error);
        throw error; 
    }
};
