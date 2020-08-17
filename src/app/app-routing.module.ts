import { NgModule } from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';
import { ClientesComponent} from './pages/clientes/clientes.component'
import { ProductosComponent } from './pages/productos/productos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import {ArticuloComponent} from './pages/articulo/articulo.component';

const routes: Routes = [
  {path: 'clientes',component:ClientesComponent},
  {path: 'productos',component:ProductosComponent},
  {path: 'proveedor',component:ProveedoresComponent},
  {path: 'articulo',component:ArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
