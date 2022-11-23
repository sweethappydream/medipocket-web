import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'app',
    loadChildren:
      './components/module-components/structure.module#StructureModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
//   routes,
//   {
//     useHash: false,
//     scrollPositionRestoration: 'enabled'
//   }
// );
