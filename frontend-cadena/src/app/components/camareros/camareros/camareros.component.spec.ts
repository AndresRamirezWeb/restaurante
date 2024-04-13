import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamarerosComponent } from './camareros.component';

describe('CamarerosComponent', () => {
  let component: CamarerosComponent;
  let fixture: ComponentFixture<CamarerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamarerosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamarerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
