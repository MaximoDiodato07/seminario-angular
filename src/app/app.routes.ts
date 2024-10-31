import { Routes } from '@angular/router';
//-- Importo las rutas de los componentes, que me cambiaran el contenido
import { BeerSectionComponent } from './beer-section/beer-section.component';
import { AboutComponent } from './about/about.component';


// --- lugar para definir todas las rutas.
export const appRoutes: Routes = [
    { path: '', redirectTo: 'beers', pathMatch:"full"}, // <-- Redirecciono pro no tener home.
    { path: 'beers', component: BeerSectionComponent }, // <-- Ruta del componente.
    { path: 'about', component: AboutComponent } // <-- Ruta del componente.
];
