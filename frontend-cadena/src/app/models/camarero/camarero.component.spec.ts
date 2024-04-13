import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamareroComponent } from './camarero.component';

describe('CamareroComponent', () => {
  let component: CamareroComponent;
  let fixture: ComponentFixture<CamareroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamareroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamareroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
