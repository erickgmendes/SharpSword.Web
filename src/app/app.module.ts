import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './components/shared/navbar/navbar.module';
import { FooterModule } from './components/shared/footer/footer.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { LbdModule } from './components/lbd/lbd.module';

import { AppComponent } from './components/app/app.component';

import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';

@NgModule({ declarations: [
        AppComponent,
        AdminLayoutComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserAnimationsModule,
        FormsModule,
        RouterModule,
        MatPaginatorModule,
        LbdModule,
        NavbarModule,
        FooterModule,
        SidebarModule,
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
