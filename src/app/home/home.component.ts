
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire,FirebaseObjectObservable} from "angularfire2";
import {MdSnackBar} from '@angular/material';
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private venueCode:String;
  private errorMessage:Boolean;
  constructor(private router: Router,private af: AngularFire,public snackBar: MdSnackBar) { }
  //private db;

  ngOnInit() {
    this.venueCode = ""
    this.errorMessage = false;
    // this.db.ref('/songLists/juqe/code').once('value').then(function(snapshot) {
    //   console.log("inside single item get")
    //   console.log(snapshot)
    // });


  }

  goToVenueCreate(){
    this.router.navigate(['/venue-create']);

  }


  goToVoting(){
  // check 
    if(this.venueCode == ""){
      this.errorMessage = true;
      this.snackBar.open("message", "Error", {
        duration: 2000,
      });
        }
    console.log("atempt to find thing");
    console.log(this.venueCode);
    var code = this.af.database.object('/songLists/'+ this.venueCode +'/code',{ preserveSnapshot: true }).take(1);

    code.subscribe(snapshot => {
      console.log("inside single item get")
      if(snapshot.val() != null){
        this.errorMessage = false;
        console.log(snapshot.val());
        this.router.navigate(['/voting',snapshot.val()]);
      }else{
        this.errorMessage = true;
        console.log(snapshot.val());
          this.snackBar.open("message", "Error", {
            duration: 2000,
          });
      }
    })



    
    


    

  }
  

}
