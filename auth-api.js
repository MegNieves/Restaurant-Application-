import firebase from "firebase/app";
import "firebase/auth";

export const logoutUser = () => {
  firebase.auth().signOut();
};

export const signInUser = async ({ name, email, password }) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    firebase.auth().currentUser.updateProfile({
      displayName: name
    });

    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "Email address already registered."
        };
      case "auth/invalid-email":
        return {
          error: "Incorrect email address"
        };
      case "auth/weak-password":
        return {
          error: "Weak password"
        };
      case "auth/too-many-requests":
        return {
          error: "Too many tries. Wait 1 minute and try again."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Correo con formato incorrecto."
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "Incorrect email"
        };
      case "auth/too-many-requests":
        return {
          error: "Too many tries. Wait a minute and try again."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};

export const sendEmailWithPassword = async email => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Incorrect email."
        };
      case "auth/user-not-found":
        return {
          error: "The user with this email does not exist."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many tries, wait a minute to try again"
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};
