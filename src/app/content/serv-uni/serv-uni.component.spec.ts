import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServUniComponent } from './serv-uni.component';

describe('ServUniComponent', () => {
  let component: ServUniComponent;
  let fixture: ComponentFixture<ServUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServUniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
