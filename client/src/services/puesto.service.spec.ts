import { TestBed, inject } from '@angular/core/testing';

import { PuestoService } from './puesto.service';

describe('PuestoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuestoService]
    });
  });

  it('should be created', inject([PuestoService], (service: PuestoService) => {
    expect(service).toBeTruthy();
  }));
});
