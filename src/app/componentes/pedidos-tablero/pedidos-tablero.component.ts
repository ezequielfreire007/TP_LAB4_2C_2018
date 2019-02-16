import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/servicios/menu.service';
import { Menu } from 'src/app/modelo/menu';

@Component({
  selector: 'app-pedidos-tablero',
  templateUrl: './pedidos-tablero.component.html',
  styleUrls: ['./pedidos-tablero.component.css']
})
export class PedidosTableroComponent implements OnInit {

  listaMenu: Menu[];

  constructor(public menuService: MenuService) {
    this.menuService.listar().subscribe( menu => {
      console.log(menu);
      this.listaMenu = menu;
    });

  }

  ngOnInit() {
  }

}
