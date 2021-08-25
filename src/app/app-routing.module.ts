import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/categories',
    pathMatch: 'full'
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule)
  },
  {
    path: 'getting-started',
    loadChildren: () => import('./getting-started/getting-started.module').then(m => m.GettingStartedPageModule)
  },
  {
    path: 'auth',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'auth/signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'auth/forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'contact-card',
    loadChildren: () => import('./contact-card/contact-card.module').then(m => m.ContactCardPageModule)
  },
  {
    path: 'forms-and-validations',
    loadChildren: () => import('./forms/validations/forms-validations.module').then(m => m.FormsValidationsPageModule)
  },
  {
    path: 'forms-filters',
    loadChildren: () => import('./forms/filters/forms-filters.module').then(m => m.FormsFiltersPageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
  {
    path: 'showcase',
    loadChildren: () => import('./showcase/showcase.module').then(m => m.ShowcasePageModule)
  },
  {
    path: 'firebase',
    redirectTo: 'firebase/auth/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'firebase/auth',
    loadChildren: () => import('./firebase/auth/firebase-auth.module').then(m => m.FirebaseAuthModule)
  },
  {
    path: 'firebase/crud',
    loadChildren: () => import('./firebase/crud/firebase-crud.module').then(m => m.FirebaseCrudModule)
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  },
  {
    path: 'alisar',
    loadChildren: () => import('./alisar/alisar.module').then( m => m.AlisarPageModule)
  },
  {
    path: 'reducir-vol',
    loadChildren: () => import('./reducir-vol/reducir-vol.module').then( m => m.ReducirVolPageModule)
  },
  {
    path: 'crecimiento',
    loadChildren: () => import('./crecimiento/crecimiento.module').then( m => m.CrecimientoPageModule)
  },
  {
    path: 'reconstruccion',
    loadChildren: () => import('./reconstruccion/reconstruccion.module').then( m => m.ReconstruccionPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
