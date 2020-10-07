import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { HomePage } from './public/pages/home/home.page';

const routes: Routes = [
	{
		path: "",
		component: PublicComponent,
		children: [
			{
				path: "",
				redirectTo: 'home',
				pathMatch: 'full'
			},
			{
				path: "home",
				component: HomePage,
				pathMatch: 'full'
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
