import { Routes } from "@angular/router";
import { AppointmentpagePComponent } from "./appointmentpage-p/appointmentpage-p.component";
import { ViewappoinmentComponent } from "./viewappoinment/viewappoinment.component";

export const AppointmentRoutes: Routes = [
    { 
      path: 'appointmentpage-p', 
      component: AppointmentpagePComponent,
      children: [
        { path: 'viewappointment', component: ViewappoinmentComponent },
        { path: '', redirectTo: 'viewappointment', pathMatch: 'full' }
      ]
    },
    { 
      path: '', 
      redirectTo: 'appointmentpage-p', 
      pathMatch: 'full' 
    }
];
