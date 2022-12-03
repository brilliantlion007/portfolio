import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesignPageComponent } from './redesign-page.component';

describe('RedesignPageComponent', () => {
  let component: RedesignPageComponent;
  let fixture: ComponentFixture<RedesignPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesignPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
