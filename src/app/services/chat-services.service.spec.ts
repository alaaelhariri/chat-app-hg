import { TestBed, inject } from '@angular/core/testing';

import { ChatServicesService } from './chat-services.service';

describe('ChatServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatServicesService]
    });
  });

  it('should be created', inject([ChatServicesService], (service: ChatServicesService) => {
    expect(service).toBeTruthy();
  }));
});
