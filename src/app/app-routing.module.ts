import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'gastronomy',
    loadChildren: () => import('./gastronomy/gastronomy.module').then(m => m.GastronomyPageModule)
  },
  {
    path: 'personalities',
    loadChildren: () => import('./personalities/personalities.module').then(m => m.PersonalitiesPageModule)
  },
  {
    path: 'town-info',
    loadChildren: () => import('./town-info/town-info.module').then(m => m.TownInfoPageModule)
  },
  {
    path: 'accommodations',
    loadChildren: () => import('./accommodations/accommodations.module').then(m => m.AccommodationsPageModule)
  },
  {
    path: 'sports-clubs',
    loadChildren: () => import('./sports-clubs/sports-clubs.module').then(m => m.SportsClubsPageModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'gastronomy',
    loadChildren: () => import('./gastronomy/gastronomy.module').then( m => m.GastronomyPageModule)
  },
  {
    path: 'personalities',
    loadChildren: () => import('./personalities/personalities.module').then( m => m.PersonalitiesPageModule)
  },
  {
    path: 'town-info',
    loadChildren: () => import('./town-info/town-info.module').then( m => m.TownInfoPageModule)
  },
  {
    path: 'accommodations',
    loadChildren: () => import('./accommodations/accommodations.module').then( m => m.AccommodationsPageModule)
  },
  {
    path: 'sports-clubs',
    loadChildren: () => import('./sports-clubs/sports-clubs.module').then( m => m.SportsClubsPageModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./about-me/about-me.module').then( m => m.AboutMePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
