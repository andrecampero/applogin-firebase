import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nav: NavController;
  
  private email: any;
  private password: any;
  private errorlogin: boolean = false;

  constructor(
    nav: NavController,
    private router: Router,
    private afireAuth: AngularFireAuth,
    private authservice: AuthService
  ) { }

  ngOnInit() {
  }

  logIn()
  {
    this.authservice.loginApiRequestFirebase(this.email, this.password).subscribe(
      data => { 
        this.errorlogin = false;
        this.afireAuth.signInWithEmailAndPassword(this.email, this.password);
        this.router.navigateByUrl('/folder');
      },
      error => { 
        this.errorlogin = true;
      }
    )
  }

  logOut()
  {
    this.afireAuth.signOut();
    this.router.navigateByUrl('/login');
  }

}
