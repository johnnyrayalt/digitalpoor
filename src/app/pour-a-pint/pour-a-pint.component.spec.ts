import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PourAPintComponent } from './pour-a-pint.component';

describe('PourAPintComponent', () => {
  let component: PourAPintComponent;
  let fixture: ComponentFixture<PourAPintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PourAPintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PourAPintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
