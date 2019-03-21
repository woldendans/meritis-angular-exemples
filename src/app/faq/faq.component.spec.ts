import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExplorerComponent } from './item-explorer.component';

describe('ItemExplorerComponent', () => {
  let component: ItemExplorerComponent;
  let fixture: ComponentFixture<ItemExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
