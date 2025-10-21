import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFoundPageComponent } from './no-found-page';

describe('NoFoundPage', () => {
  let component: NoFoundPageComponent;
  let fixture: ComponentFixture<NoFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoFoundPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
