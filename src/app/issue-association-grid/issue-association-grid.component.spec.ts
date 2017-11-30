import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueAssociationGridComponent } from './issue-association-grid.component';

describe('IssueAssociationGridComponent', () => {
  let component: IssueAssociationGridComponent;
  let fixture: ComponentFixture<IssueAssociationGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueAssociationGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueAssociationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
