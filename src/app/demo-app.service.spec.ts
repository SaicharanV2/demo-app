import { TestBed } from '@angular/core/testing';

import { DemoAppService } from './demo-app.service';

describe('DemoAppService', () => {
  let service: DemoAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
