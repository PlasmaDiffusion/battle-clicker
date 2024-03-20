import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskToUseCookiesComponent } from './ask-to-use-cookies.component';

describe('AskToUseCookiesComponent', () => {
  let component: AskToUseCookiesComponent;
  let fixture: ComponentFixture<AskToUseCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskToUseCookiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AskToUseCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
