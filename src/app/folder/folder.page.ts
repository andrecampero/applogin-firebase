import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public user: string;
  private loginstatus: any;

  constructor(
    nav: NavController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private afireAuth: AngularFireAuth
    
    //private http: HttpClient
  ) {
    afireAuth.authState.subscribe(user => {
      if(user)
      {
        this.user = user.displayName;
      } 
      else
      {
        this.user = null;     
      }
    });
   }

  ngOnInit() {
  }

  logOut()
  {
    this.afireAuth.signOut();
    this.router.navigateByUrl('/login');
  }
}
