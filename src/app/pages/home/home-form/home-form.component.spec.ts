import { TestBed } from '@angular/core/testing';
import { HomeFormComponent } from './home-form.component';

describe('HomeHomeFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeFormComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'form'`, () => {
    const fixture = TestBed.createComponent(HomeFormComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('form');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomeFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-app app is running!');
  });
});
