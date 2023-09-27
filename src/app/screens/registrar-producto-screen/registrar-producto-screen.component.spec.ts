import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProductoScreenComponent } from './registrar-producto-screen.component';

describe('RegistrarProductoScreenComponent', () => {
  let component: RegistrarProductoScreenComponent;
  let fixture: ComponentFixture<RegistrarProductoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarProductoScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarProductoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
