import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavsComponent } from './favs/favs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoctailDetailsComponent } from './coctail-details/coctail-details.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "favs", component: FavsComponent },
  { path: "coctail-details/:id", component: CoctailDetailsComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
