import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGenericoComponent } from './nav-generico.component';

describe('NavGenericoComponent', () => {
  let component: NavGenericoComponent;
  let fixture: ComponentFixture<NavGenericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavGenericoComponent]
    });
    fixture = TestBed.createComponent(NavGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
