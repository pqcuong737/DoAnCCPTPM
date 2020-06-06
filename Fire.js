import firebase from "firebase";

class Fire {
    constructor() {
		var firebaseConfig = {
			apiKey: "AIzaSyADRO8_ByZQAi49gthB0YoEUd0tvksHOEg",
			authDomain: "ccptpm-d3f13.firebaseapp.com",
			databaseURL: "https://ccptpm-d3f13.firebaseio.com",
			projectId: "ccptpm-d3f13",
			storageBucket: "ccptpm-d3f13.appspot.com",
			messagingSenderId: "126626627526",
			appId: "1:126626627526:web:be945c8c8ecbf3d5987cc7"
		  };
        firebase.initializeApp(firebaseConfig);
    }

    addPost = async ({ text, localUri }) => {
        const remoteUri = await this.uploadPhotoAsync(localUri);

        return new Promise((res, rej) => {
            this.firestore
                .collection("posts")
                .add({
                    text,
                    uid: this.uid,
                    timestamp: this.timestamp,
                    image: remoteUri
                })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                });
        });
    };

    uploadPhotoAsync = async uri => {
        const path = `photos/${this.uid}/${Date.now()}.jpg`;

        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase
                .storage()
                .ref(path)
                .put(file);

            upload.on(
                "state_changed",
                snapshot => {},
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            );
        });
    };

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;
