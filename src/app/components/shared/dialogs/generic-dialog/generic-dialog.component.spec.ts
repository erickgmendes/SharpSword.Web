import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GenericDialogComponent, DialogData } from './generic-dialog.component';

describe('GenericDialogComponent', () => {
  let component: GenericDialogComponent;
  let fixture: ComponentFixture&lt;GenericDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule],
      declarations: [GenericDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDialogComponent);
    component = fixture.componentInstance;
    
    // Provide mock data
    component.data = {
      title: 'Test Title',
      message: 'Test Message'
    };
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});