import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  
  constructor(private af: AngularFire,private route: ActivatedRoute) {
    
  
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.items = this.af.database.list('/songLists/'+ params['code']+'/songPool');
    })
  }


}
