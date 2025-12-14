import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespositriesComponent } from './respositries.component';

describe('RespositriesComponent', () => {
  let component: RespositriesComponent;
  let fixture: ComponentFixture<RespositriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespositriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespositriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
