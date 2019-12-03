import { TestBed, async, inject } from '@angular/core/testing';

import { RedireccionGuard } from './redireccion.guard';

describe('RedireccionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedireccionGuard]
    });
  });

  it('should ...', inject([RedireccionGuard], (guard: RedireccionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
