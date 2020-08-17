import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { MenuComponent } from './component/menu/menu.component';
import { ToastComponent } from './component/toast/toast.component';

import {ToastrModule} from 'ngx-toastr';
import { ModalComponent } from './component/modal/modal.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProductosComponent,
    ProveedoresComponent,
    MenuComponent,
    ToastComponent,
    ModalComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({toastComponent:ToastComponent})
  ],
  
  entryComponents:[
  ToastComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
