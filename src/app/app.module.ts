import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './components/shared/navbar/navbar.module';
import { FooterModule } from './components/shared/footer/footer.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { LbdModule } from './components/lbd/lbd.module';

import { AppComponent } from './components/app/app.component';
import { MaterialIconsDemoComponent } from './material-icons-demo/material-icons-demo.component';

import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { DialogsModule } from './components/shared/dialogs/dialogs.module';

@NgModule({ declarations: [
        AppComponent,
        AdminLayoutComponent,
        MaterialIconsDemoComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserAnimationsModule,
        FormsModule,
        RouterModule,
        MatIconModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDialogModule,
        LbdModule,
        NavbarModule,
        FooterModule,
        SidebarModule,
        DialogsModule,
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
