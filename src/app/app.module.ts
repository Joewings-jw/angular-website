import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './partials';

import { HomeComponent } from './routes/home/home/home.component';
import { AboutComponent } from './routes/about/about/about.component';
import { SkillsComponent } from './routes/skills/skills/skills.component';
import { ServicesComponent } from './routes/services/services/services.component';
import { PortfolioComponent } from './routes/portfolio/portfolio/portfolio.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { TestimonialsComponent } from './partials/testimonials/testimonials/testimonials.component';
import { ProjectComponent } from './partials/project/project/project.component';
import { ContactComponent } from './routes/contact/contact/contact.component';
import { ModalComponent } from './common/modal/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ProjectComponent,
    ContactComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
