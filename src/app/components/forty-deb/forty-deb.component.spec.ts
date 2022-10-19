import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortyDebComponent } from './forty-deb.component';

describe('FortyDebComponent', () => {
  let component: FortyDebComponent;
  let fixture: ComponentFixture<FortyDebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortyDebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortyDebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
