import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent,
   AboutComponent,
   SkillsComponent,
   ServicesComponent,
   PortfolioComponent,
   ContactComponent 
  } from './routes/';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "skills", component:   SkillsComponent},
  { path: "services", component:  ServicesComponent },
  { path: "portfolio", component: PortfolioComponent },
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
