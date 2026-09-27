import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { CreateProducts } from './Pages/create-products/create-products';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'create-products',
        component: CreateProducts
    }
];
