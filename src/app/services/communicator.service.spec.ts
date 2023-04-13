import {fakeAsync, getTestBed, TestBed} from '@angular/core/testing';
import {CommunicatorService} from './communicator.service';
import {LoadingService} from './loading.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';

describe('CommunicatorService', () => {
  let fooService: CommunicatorService;
  let httpMock: HttpTestingController;
  let injector: TestBed;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, HttpClientTestingModule, FormsModule, ToastrModule.forRoot()],
      providers: [
        CommunicatorService,
        HttpClient,
        LoadingService
      ]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    fooService= TestBed.inject(CommunicatorService);
  });

  it('call setStateLoading method', fakeAsync(() => {
    fooService.isShowLoad = false;
    fooService.showLoad();
    expect(fooService.isShowLoad).toEqual(true);
    expect(fooService.requests.length).toEqual(1);
    fooService.isShowLoad = false;
    fooService.showLoad();
    expect(fooService.requests.length).toEqual(2);
  }));

  it('call hideLoad method', fakeAsync(() => {
    fooService.isShowLoad = false;
    fooService.showLoad();
    expect(fooService.isShowLoad).toEqual(true);
    expect(fooService.requests.length).toEqual(1);
    fooService.isShowLoad = false;
    fooService.showLoad();
    expect(fooService.requests.length).toEqual(2);
    fooService.hideLoad();
    expect(fooService.requests.length).toEqual(1);
  }));

  it('call http_put method', fakeAsync(() => {
    fooService.isShowLoad = false;
    fooService.http_put('')
      .subscribe(result => {
        expect(result.items.length).toBe(2);
      });
    const req = httpMock.expectOne('');
    req.flush({
      incomplete_results: false,
      items: [{}, {}],
      total_count: 2
    });
  }));

  it('call http_get method', fakeAsync(() => {
    fooService.isShowLoad = false;
    fooService.http_get('')
      .subscribe(result => {
        expect(result.items.length).toBe(2);
      });
    const req = httpMock.expectOne('');
    req.flush({
      incomplete_results: false,
      items: [{}, {}],
      total_count: 2
    });
  }));

  it('call http_post method', fakeAsync(() => {
    fooService.isShowLoad = false;
    fooService.http_post('', {})
      .subscribe(result => {
        expect(result.items.length).toBe(2);
      });
    const req = httpMock.expectOne('');
    req.flush({
      incomplete_results: false,
      items: [{}, {}],
      total_count: 2
    });
  }));

  it('call http_post method with error', fakeAsync(() => {
    let response: any;
    let errResponse: any;
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    const data = 'Invalid request parameters';
    fooService.http_post('url/being/monitored', {}).subscribe(res => response = res, err => errResponse = err);
    httpMock.expectOne('url/being/monitored').flush(data, mockErrorResponse);
    // @ts-ignore
    expect(errResponse.error).toBe(data);
  }));

  it('call http_put method with error', fakeAsync(() => {
    let response: any;
    let errResponse: any;
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    const data = 'Invalid request parameters';
    fooService.http_put('url/being/monitored', {}).subscribe(res => response = res, err => errResponse = err);
    httpMock.expectOne('url/being/monitored').flush(data, mockErrorResponse);
    // @ts-ignore
    expect(errResponse.error).toBe(data);
  }));

  it('call http_put method with error', fakeAsync(() => {
    let response: any;
    let errResponse: any;
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    const data = 'Invalid request parameters';
    fooService.http_get('url/being/monitored', {}).subscribe(res => response = res, err => errResponse = err);
    httpMock.expectOne('url/being/monitored').flush(data, mockErrorResponse);
    // @ts-ignore
    expect(errResponse.error).toBe(data);
  }));
});
