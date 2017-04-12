import { TestBed, inject } from '@angular/core/testing';

import { CartServService } from './cart-serv.service';

describe('CartServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartServService]
    });
  });

  it('should ...', inject([CartServService], (service: CartServService) => {
    expect(service).toBeTruthy();
  }));
});
