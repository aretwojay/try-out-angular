import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth) { }

  state = "";



  async register(credentials: { email: string, password: string } | any) {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, credentials.email, credentials.password);
      console.log("created user", result);
    }
    catch (err: any) {
      console.log("error creating user", Object.entries(err), err.code);
      this.state = err.code;
    }
  }

  isLoggedIn() {
    return this.auth.currentUser;
  }
}
