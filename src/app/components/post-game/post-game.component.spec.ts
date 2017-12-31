import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGameComponent } from './post-game.component';

describe('PostGameComponent', () => {
  let component: PostGameComponent;
  let fixture: ComponentFixture<PostGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
