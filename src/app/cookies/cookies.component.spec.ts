import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesComponent } from './cookies.component';

describe('AskToUseCookiesComponent', () => {
  let component: CookiesComponent;
  let fixture: ComponentFixture<CookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
