import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarPedidoComponent } from './avaliar-pedido.component';

describe('AvaliarPedidoComponent', () => {
  let component: AvaliarPedidoComponent;
  let fixture: ComponentFixture<AvaliarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliarPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
