import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

import { Ride } from "../model/ride";

@Injectable({
  providedIn: "root"
})
export class DbService {
  constructor(private store: AngularFirestore) {}

  getRequest() {
    return this.store.collection("rides").get();
  }

  postRequest(payload) {
    return this.store.collection("rides").add({ payload });
  }

  putRequest(payload: Ride) {
    return this.store
      .collection("rides")
      .doc(payload.id)
      .update(payload);
  }
}
