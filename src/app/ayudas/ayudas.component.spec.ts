import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudasComponent } from './ayudas.component';

describe('AyudasComponent', () => {
  let component: AyudasComponent;
  let fixture: ComponentFixture<AyudasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
