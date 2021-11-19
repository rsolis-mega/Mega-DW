import { TestBed } from '@angular/core/testing';

import { ServicioDwService } from './servicio-dw.service';

describe('ServicioDwService', () => {
  let service: ServicioDwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
