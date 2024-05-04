import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { Navegacion2Component } from './navegacion2/navegacion2.component';
import { Navegacion1Component } from './navegacion1/navegacion1.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile2Component } from './profile2/profile2.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path:'messages',
        component: MessagesComponent

    },
    {
        path: 'profile',
        component: ProfileComponent

    },
    {
        path:'profile2',
        component: Profile2Component
    },
    {
        path: 'navegacion1',
        component: Navegacion1Component
    },
    {
        path:'navegacion2',
        component:Navegacion2Component
    },
];

