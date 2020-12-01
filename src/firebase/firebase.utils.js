import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDTAp70uEPYZE53esem2hnxPxRs6-Lwd_g",
    authDomain: "crwn-db-bc988.firebaseapp.com",
    databaseURL: "https://crwn-db-bc988.firebaseio.com",
    projectId: "crwn-db-bc988",
    storageBucket: "crwn-db-bc988.appspot.com",
    messagingSenderId: "56724716728",
    appId: "1:56724716728:web:a77acdc8142e3c7ca6884d"
};


export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth)
        return;

    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        }
        catch (error) {
            console.log(error);
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




