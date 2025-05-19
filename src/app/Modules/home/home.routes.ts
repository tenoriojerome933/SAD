import { Routes } from "@angular/router";
import { HomepagePComponent } from "./homepage-p/homepage-p.component";
import { ViewlivequeueComponent } from "./viewlivequeue/viewlivequeue.component";

export const HomeRoutes: Routes = [
    { 
      path: 'homepage-p', 
      component: HomepagePComponent,
      children: [
        { path: 'viewlivequeue', component: ViewlivequeueComponent },
        { path: '', redirectTo: 'viewlivequeue', pathMatch: 'full' }
      ]
    },
    { 
      path: '', 
      redirectTo: 'homepage-p', 
      pathMatch: 'full' 
    }
];
