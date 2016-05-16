import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Select2AppComponent } from '../app/select2.component';

beforeEachProviders(() => [Select2AppComponent]);

describe('App: Select2', () => {
  it('should create the app',
      inject([Select2AppComponent], (app: Select2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'select2 works!\'',
      inject([Select2AppComponent], (app: Select2AppComponent) => {
    expect(app.title).toEqual('select2 works!');
  }));
});
