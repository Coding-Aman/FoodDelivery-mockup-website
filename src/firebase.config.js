import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCL0w1nIPX5maPm55ICgiinZIUyYw3W9Rw",
	authDomain: "restaurantapp-b324d.firebaseapp.com",
	databaseURL: "https://restaurantapp-b324d-default-rtdb.firebaseio.com",
	projectId: "restaurantapp-b324d",
	storageBucket: "restaurantapp-b324d.appspot.com",
	messagingSenderId: "13985195648",
	appId: "1:13985195648:web:9f1390fc2b445fa8fbe865",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
