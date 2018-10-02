//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//IMPORTACIONES ADMsys
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private afAuth :  AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

}
