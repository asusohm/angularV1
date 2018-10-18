import { TestBed, inject } from '@angular/core/testing';

import { MemberControllerService } from './member-controller.service';

describe('MemberControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberControllerService]
    });
  });

  it('should be created', inject([MemberControllerService], (service: MemberControllerService) => {
    expect(service).toBeTruthy();
  }));
});
