import { TestBed } from '@angular/core/testing';

import { TimeResponseInterceptor } from './time-response.interceptor';

describe('TimeResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TimeResponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TimeResponseInterceptor = TestBed.inject(TimeResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
