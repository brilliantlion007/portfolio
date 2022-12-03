import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterativePageComponent } from './iterative-page.component';

describe('IterativePageComponent', () => {
  let component: IterativePageComponent;
  let fixture: ComponentFixture<IterativePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterativePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IterativePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
