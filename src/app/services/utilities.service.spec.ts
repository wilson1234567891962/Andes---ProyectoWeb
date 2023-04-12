import {fakeAsync, TestBed } from '@angular/core/testing';
import {LoginService} from './login.service';
import {of} from 'rxjs';
import {CommunicatorService} from './communicator.service';
import {environmentProd} from '../../environments/environment.prod';
import {UtilitiesService} from './utilities.service';

describe('LoginService', () => {
  let fooService: UtilitiesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilitiesService,
        {
          provide: CommunicatorService,
          useValue: {
            http_post() { return of({}); },
          },
        },]
    });
    fooService= TestBed.inject(UtilitiesService);
  });

  it('call paginate method', fakeAsync(() => {
    const data = fooService.paginate(0,2, 15, 20);
    expect(0).toEqual(data.currentPage);
  }));

  it('call betweenDate method', fakeAsync(() => {
    const dateStart = new Date('2022-04-22');
    const dateEnd = new Date('2022-04-22');
    expect(fooService.betweenDate(dateStart,dateEnd, '2022-04-22')).toEqual(false);
  }));

  it('call changeFormatDate method', fakeAsync(() => {
    expect(fooService.changeFormatDate('2022-04-22')).toEqual('04-2022-22');
  }));

  it('call conversionDate method', fakeAsync(() => {
    const dateStart = new Date('2022-04-22');
    expect(fooService.conversionDate(dateStart, '2022-04-22')).toEqual(false);
  }));

  it('call validatorDate method', fakeAsync(() => {
    const dateStart = new Date('2021-03-22');
    expect(fooService.validatorDate(dateStart, 2)).toEqual(false);
  }));

  it('call validatorsEmail method', fakeAsync(() => {
    expect(fooService.validatorsEmail('a@gmail.com')).toEqual(true);
  }));

  it('call validatorsFields method', fakeAsync(() => {
    expect(fooService.validatorsFields('a@gmail.com')).toEqual(true);
  }));
});
