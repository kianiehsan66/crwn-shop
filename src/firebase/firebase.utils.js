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

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    console.log(objectsToAdd);
    for (var key in objectsToAdd) {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, objectsToAdd[key]);
    }

    batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}




export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;




