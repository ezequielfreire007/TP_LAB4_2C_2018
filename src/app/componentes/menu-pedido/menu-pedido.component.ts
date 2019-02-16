import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/modelo/menu';
import { MenuService } from 'src/app/servicios/menu.service';

@Component({
  selector: 'app-menu-pedido',
  templateUrl: './menu-pedido.component.html',
  styleUrls: ['./menu-pedido.component.css']
})
export class MenuPedidoComponent implements OnInit {

  @Input() listaMenu: Menu[];

  constructor() { }

  ngOnInit() {
  }



}
