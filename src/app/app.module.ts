import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RealisationsComponent } from './pages/realisations/realisations.component';
import { RouterModule, Routes } from '@angular/router';
import { PartenairesComponent } from './pages/partenaires/partenaires.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'realisations', component: RealisationsComponent },
  { path: 'prestations', component: PrestationsComponent},
  { path: 'partenaires', component: PartenairesComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', component: LandingComponent},
  { path: 'navbar', component: NavbarComponent}
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RealisationsComponent,
    PartenairesComponent,
    ContactComponent,
    LandingComponent,
    PrestationsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
