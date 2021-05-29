import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: DashboardPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
