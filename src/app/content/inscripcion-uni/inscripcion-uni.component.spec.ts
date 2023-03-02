import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionUniComponent } from './inscripcion-uni.component';

describe('InscripcionUniComponent', () => {
  let component: InscripcionUniComponent;
  let fixture: ComponentFixture<InscripcionUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionUniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
