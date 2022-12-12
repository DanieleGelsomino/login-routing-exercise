import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomebackComponent } from './welcomeback.component';

describe('WelcomebackComponent', () => {
  let component: WelcomebackComponent;
  let fixture: ComponentFixture<WelcomebackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomebackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
