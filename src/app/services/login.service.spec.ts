import {fakeAsync, TestBed } from '@angular/core/testing';
import {LoginService} from './login.service';
import {of} from 'rxjs';
import {CommunicatorService} from './communicator.service';

describe('LoginService', () => {
  let fooService: LoginService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService,
        {
          provide: CommunicatorService,
          useValue: {
            http_post() { return of({}); },
          },
        },]
    });
    fooService= TestBed.inject(LoginService);
  });

  it('call login method', fakeAsync(() => {
    fooService.login().subscribe(result => {
      expect(result).toEqual({});
    });
  }));

  it('call login method', fakeAsync(() => {
    fooService.register('', '').subscribe(result => {
      expect(result).toEqual({});
    });
  }));


  it('check get and set methods', fakeAsync(() => {
    fooService.user = '';
    fooService.password = '';
    fooService.tokenSecret = '';
    fooService.rol = '1';
    expect(fooService.user ).toEqual('');
    expect(fooService.password ).toEqual('');
    expect(fooService.tokenSecret).toEqual('');
    expect(fooService.rol).toEqual('1');
  }));
});
