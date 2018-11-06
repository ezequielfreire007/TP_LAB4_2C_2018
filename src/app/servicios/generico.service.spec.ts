import { TestBed } from '@angular/core/testing';

import { GenericoService } from './generico.service';

describe('GenericoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericoService = TestBed.get(GenericoService);
    expect(service).toBeTruthy();
  });
});
