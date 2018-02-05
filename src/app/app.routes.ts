import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index.component';
import { liguesComponent } from './components/ligues.component';
import { geoComponent } from './components/geo.component';



const app_routes: Routes = [
	{path:'index', component: IndexComponent},	
	{path:'ligues', component: liguesComponent},
	{path:'geo', component: geoComponent},
	{path:'**', pathMatch: 'full', redirectTo:'index'}
];

export const app_routing = RouterModule.forRoot(app_routes);