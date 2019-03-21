import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDisplayerComponent } from './posts-displayer.component';

describe('PostsDisplayerComponent', () => {
  let component: PostsDisplayerComponent;
  let fixture: ComponentFixture<PostsDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
