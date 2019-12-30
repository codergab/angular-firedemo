import { Component, OnInit } from "@angular/core";
import { DbService } from "src/app/services/db.service";
import { Observable } from "rxjs";
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "@angular/fire/firestore";

@Component({
  selector: "app-driver",
  templateUrl: "./driver.component.html",
  styleUrls: ["./driver.component.css"]
})
export class DriverComponent implements OnInit {
  rides: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<any>;
  rideAccepted: boolean;

  constructor(private store: DbService, stor: AngularFirestore) {
    this.itemsCollection = stor.collection("rides");
    this.rides = this.itemsCollection.valueChanges();
    console.log(this.rides);
  }

  ngOnInit() {}

  acceptRide(ride) {
    this.store.putRequest(ride);
    this.rideAccepted = true;
  }
}
