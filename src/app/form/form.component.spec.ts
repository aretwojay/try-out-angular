import { TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FormComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'form'`, () => {
    const fixture = TestBed.createComponent(FormComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('form');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-app app is running!');
  });
});
