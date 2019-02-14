import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosTableroComponent } from './pedidos-tablero.component';

describe('PedidosTableroComponent', () => {
  let component: PedidosTableroComponent;
  let fixture: ComponentFixture<PedidosTableroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosTableroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosTableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
