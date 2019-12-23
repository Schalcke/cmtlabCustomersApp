import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'details-project/:id', 
    loadChildren: './details-project/details-projet.module#DetailsProjectComponentModule'
  },
  {
    path: 'details-project', loadChildren: './details-project/details-projet.module#DetailsProjectComponentModule'
  },
  // Show details project in popover component
  {
    path: 'show-project/:id', 
    loadChildren: './show-project/show-project.module#ShowProjectComponentModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
