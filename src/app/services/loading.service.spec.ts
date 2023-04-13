import {fakeAsync, TestBed } from '@angular/core/testing';
import {LoginService} from './login.service';
import {of} from 'rxjs';
import {CommunicatorService} from './communicator.service';
import {LoadingService} from './loading.service';

describe('LoadingService', () => {
  let fooService: LoadingService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingService,
        {
          provide: CommunicatorService,
          useValue: {
            http_post() { return of({}); },
          },
        },]
    });
    fooService= TestBed.inject(LoadingService);
  });

  it('call setStateLoading method', fakeAsync(() => {
    fooService.setStateLoading(true);
    expect(fooService.state).toEqual(true);
  }));
});
