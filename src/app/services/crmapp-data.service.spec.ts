import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CRMAppDataService } from './crmapp-data.service';

describe('CRMAppDataService', () => {
  let service: CRMAppDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CRMAppDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
