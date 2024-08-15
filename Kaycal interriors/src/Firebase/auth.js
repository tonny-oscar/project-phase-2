import { auth } from "./firebase";

import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword, } from "firebase/auth";

// export const doCreateUsserWithEmailAndPassword = async (email, pasword)=> {
//     return createUserWithEmailAndPassword(auth, email, pasword);
// };

export const doCreateUsserWithEmailAndPassword = async (email, pasword)=>{
    return createUserWithEmailAndPassword(auth, email, pasword);
};

export const doSignInWithEmailAndPassword = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPasword = async ()=>{
    const provider = new GoogleAuthProvider();
    const results = await signInWithPopup(auth, provider);
    //result.user
    return results
}

export const doSignOut = ()=>{
    return auth.signOut();
};

export const doPaswordReset = (email)=> {
    return sendPasswordResetEmail(auth,email);
};

export const doPaswordResetChange = (password)=>{
    return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = ()=>{
    return doSendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`,
    });
};