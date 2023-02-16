import { TestBed } from '@angular/core/testing';

import { ConnectingService } from './connecting-.service';

describe('ConnectingService', () => {
  let service: ConnectingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
