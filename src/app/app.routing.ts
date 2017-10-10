import { ModuleWithProviders } from '@angular/core'; // Provides this router to the rest of the app
import { Routes, RouterModule } from '@angular/router'; // Render specific components when specific urls are provided to the router

import { PoiFormComponent } from './poi-form/poi-form.component';
import { PoiListComponent } from './poi-list/poi-list.component';
import { PoiDetailComponent } from './poi-detail/poi-detail.component';



// Master list of all available routes, contains values that other code in the app cannot change
const appRoutes: Routes = [
  {
    path: '',
    component: PoiListComponent
  },
  {
    path: 'form',
    component: PoiFormComponent
  },  
  {
    path: 'detail',
    component: PoiDetailComponent
  },
  {
    path: 'list',
    component: PoiListComponent
  },
  {
    path: 'poi/:autoId',
    component: PoiDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
