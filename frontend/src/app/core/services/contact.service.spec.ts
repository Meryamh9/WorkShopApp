import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ContactService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send a message via POST', () => {
    const mockData = {
      nom: 'Test',
      email: 'test@example.com',
      message: 'Bonjour',
    };

    service.envoyerMessage(mockData).subscribe((response) => {
      expect(response).toEqual({ message: 'Message sent successfully' });
    });

    const req = httpMock.expectOne('/contact');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockData);

    req.flush({ message: 'Message sent successfully' });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
