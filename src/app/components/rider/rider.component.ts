import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { DbService } from "src/app/services/db.service";
import { uuid } from "uuid";

@Component({
  selector: "app-rider",
  templateUrl: "./rider.component.html",
  styleUrls: ["./rider.component.css"]
})
export class RiderComponent implements OnInit {
  location: string;
  rideSent: boolean = false;

  constructor(private dbservice: DbService, private store: AngularFirestore) {}

  ngOnInit() {}

  requestRide() {
    const payload = {
      id: this.store.createId(),
      location: this.location,
      rideAccepted: false,
      rideEnded: false
    };

    this.dbservice.postRequest(payload).then(data => {
      console.log("Data Saved", data);
    });
  }
}
