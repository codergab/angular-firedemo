import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DriverComponent } from "./components/driver/driver.component";
import { RiderComponent } from "./components/rider/rider.component";

const routes: Routes = [
  {
    path: "driver",
    component: DriverComponent
  },
  {
    path: "",
    component: RiderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
