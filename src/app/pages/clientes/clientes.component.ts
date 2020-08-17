import { Component, OnInit } from '@angular/core';
import { CClientes } from 'src/app/classes/cClientes/cclientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {


  public lst: CClientes[];
  
  constructor() {
      this.lst=[];
   }

  ngOnInit(): void {
    this.llenarlista();
}

private llenarlista(){
  for(let i=1;i<=5;i++){
    var clientes=new CClientes();
    clientes.ide="9090" +i+i.toString();
    clientes.nom="cliente"+i;
    clientes.sal=1000000+i*100000;
    clientes.fecha=new Date(new Date().setDate(i));
     this.lst.push(clientes);
  }
}
}
