import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingButtonComponent } from './building-button.component';

describe('BuildingButtonComponent', () => {
  let component: BuildingButtonComponent;
  let fixture: ComponentFixture<BuildingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
