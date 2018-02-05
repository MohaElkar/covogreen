/*
 * TUTO : http://jasonwatmore.com/post/2016/08/16/angular-2-jwt-authentication-example-tutorial
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GuardService} from '../../services/guard.service';
import {GuardAdminService} from '../../services/guard-admin.service';

import {DashboardComponent} from '../dashboard/dashboard.component';
import {UserComponent} from '../user/user.component';
import {NewuserComponent} from '../user/newuser.component';

import {AdminComponent} from '../admin/admin.component';

import {RecherchePageComponent} from '../recherche-page/recherche-page.component';


const routes: Routes = [
    { path: '', component: DashboardComponent},
	
    { path: 'newuser', component: NewuserComponent },

    { path: 'admin', component: AdminComponent, canActivate: [GuardAdminService] },

    { path: 'user', component: UserComponent, canActivate: [GuardService] },

    { path: 'recherche', component: RecherchePageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ],
    declarations: []
})
export class AppRoutingModule {}
