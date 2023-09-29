import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEnfermeroComponent } from './nuevo-enfermero.component';

describe('NuevoEnfermeroComponent', () => {
  let component: NuevoEnfermeroComponent;
  let fixture: ComponentFixture<NuevoEnfermeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoEnfermeroComponent]
    });
    fixture = TestBed.createComponent(NuevoEnfermeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
