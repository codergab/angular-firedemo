import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DriverComponent } from "./components/driver/driver.component";
import { RiderComponent } from "./components/rider/rider.component";
import { environment } from "src/environments/environment";
import { AngularFirestore } from "@angular/fire/firestore";

@NgModule({
  declarations: [AppComponent, DriverComponent, RiderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
