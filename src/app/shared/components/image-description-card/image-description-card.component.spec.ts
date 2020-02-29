import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDescriptionCardComponent } from './image-description-card.component';

describe('ImageDescriptionCardComponent', () => {
  let component: ImageDescriptionCardComponent;
  let fixture: ComponentFixture<ImageDescriptionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDescriptionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDescriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
