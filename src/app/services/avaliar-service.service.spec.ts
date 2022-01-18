import { TestBed } from '@angular/core/testing';

import { AvaliarServiceService } from './avaliar-service.service';

describe('AvaliarServiceService', () => {
  let service: AvaliarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
