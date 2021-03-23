import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasCeComponent } from './oficinas-ce.component';

describe('OficinasCeComponent', () => {
  let component: OficinasCeComponent;
  let fixture: ComponentFixture<OficinasCeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinasCeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinasCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
