import { Component, OnInit } from '@angular/core';
import {cArticulo} from 'src/app/classes/cArticulos/carticulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  public lst: cArticulo[];

  constructor() { 
    this.lst=[];
  }

  ngOnInit(): void {
  this.llenarLista();
  }

private llenarLista(){
  for(let i=0; i<=5; i++){
    var articulo= new cArticulo();
    articulo.noma="Paquete: "+99+i.toString();
    articulo.coda="articulo"+10+i;
    articulo.desca="descripcion: "+1548+i;
    articulo.valora=300000+i*50000;
    this.lst.push(articulo);
  }
}
}
