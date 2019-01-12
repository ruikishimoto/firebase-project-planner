const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.json({ success: true, message: "Hello World" });
// });

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc));
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(userDoc => {
      const userData = userDoc.data();
      const notification = {
        content: "Joined the party",
        user: `${userData.firstName} ${userData.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return createNotification(notification);
    });
});
