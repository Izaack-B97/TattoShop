import { TestBed, async, inject } from '@angular/core/testing';

import { NoAutorizadoGuard } from './no-autorizado.guard';

describe('NoAutorizadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoAutorizadoGuard]
    });
  });

  it('should ...', inject([NoAutorizadoGuard], (guard: NoAutorizadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
