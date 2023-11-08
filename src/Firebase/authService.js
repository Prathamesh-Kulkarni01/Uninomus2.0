import React from 'react';
import { db } from './firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

export class AuthService {
  constructor() {
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth(); 

  }

  async createAccount({ email, password, name }) {
    try {
      const user = { "name": "Pathnamesh" };
      if (user) {
        return user;
      } else {
        // Handle the case when user is not found
      }
    } catch (error) {
      throw error;
    }
  }

  async login() {
    try {
      // Sign in with Google using the pop-up method
      signInWithPopup(this.auth, this.provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user)
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return "User";
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    // Your logout logic here
  }
}

const authService = new AuthService();
export default authService;

