import admin from "firebase-admin";
// const service_account = require("../firebaseinfo.json");

if (!admin.apps.length) {
    let text = admin.initializeApp({
        credential: admin.credential.cert({
            project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            private_key: process.env.FIREBASE_PRIVATE_KEY,
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
        }),
        databaseURL: "https://devfl-bdeda-default-rtdb.firebaseio.com/",
    });
    // admin.initializeApp({
    //     credential: admin.credential.cert(service_account),
    //     databaseURL: "https://devfl-bdeda-default-rtdb.firebaseio.com/",
    // });
}
export default admin.database();
