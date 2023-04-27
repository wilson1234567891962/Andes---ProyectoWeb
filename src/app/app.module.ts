import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

// admin views
import { LogisticComponent } from './views/admin/logistic/logistic.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { TablesComponent } from './views/admin/tables/tables.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';

// components for views and layouts

import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { CardSettingsComponent } from './components/cards/card-settings/card-settings.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { CardTableComponent } from './components/cards/card-table/card-table.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { LogisticExampleComponent } from './components/logistic/logistic-example/logistic-example.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {FormsModule} from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import {CommunicatorService} from './services/communicator.service';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterAdminComponent,
    CardSettingsComponent,
    CardStatsComponent,
    CardTableComponent,
    LogisticExampleComponent,
    AuthNavbarComponent,
    AdminComponent,
    AuthComponent,
    LogisticComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    LoadingComponent,
  ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,  ToastrModule.forRoot(), BrowserAnimationsModule],
  providers: [CommunicatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
