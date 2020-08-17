import { Component, OnInit } from '@angular/core';
import {CProducto } from 'src/app/classes/cProducto/cProducto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
   public lst: CProducto[];

  constructor() {
    this.lst=[];
   }

  ngOnInit(): void {
       this.llenarLista();
    }

    private llenarLista(){
      for (let i=1;i<=7;i++){
         var producto=new CProducto(); 
         producto.codp=(i * 1000).toString() + "00";
         producto.desp="producto" + i;
         producto.valp=100000 + i * 20000;
         this.lst.push(producto);
      }
  }
}
