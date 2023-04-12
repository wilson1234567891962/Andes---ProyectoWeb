import {async, ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {LoginService} from '../../../services/login.service';
import {RouterTestingModule} from '@angular/router/testing';
import {UtilitiesService} from '../../../services/utilities.service';
import {Router} from '@angular/router';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {of, Subject} from 'rxjs';
import {CommunicatorService} from '../../../services/communicator.service';
import {LoadingService} from '../../../services/loading.service';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule, ToastrModule.forRoot()],
      declarations: [
        LoginComponent
      ],
      providers: [
        HttpClient,
        LoadingService,
        UtilitiesService,
        ToastrService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
        {
          provide: CommunicatorService,
          useValue: {
            http_post() { return of({}); },
          },
        },
        {
          provide: LoginService,
          useValue: {
            login() { return of({data: {token:'LG-0000',rol:1}}); },
          },
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    let localStore = {};

    spyOn(window.localStorage, 'getItem').and.callFake((key) =>
      key in localStore ? localStore[key] : 'TEST_CODE'
    );
    spyOn(window.localStorage, 'setItem').and.callFake(
      (key, value) => (localStore[key] = value + '')
    );

    spyOn(window.localStorage, 'clear').and.callFake(() => (localStore = {}));
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Create', () => {
    expect(component).toBeTruthy();
  });


  it('Create', () => {
    expect(component).toBeTruthy();
  });

  it('Check the save user', () => {
    component.checkIsSaveUser();
    expect(component.isChecked).toEqual(true);
  });

  it('Check the saveUser method', () => {
    component.checkIsSaveUser();
    expect(component.email).toEqual('TEST_CODE');

    component.saveUser();
    expect(component.isChecked).toEqual(false);

    component.email = 'TEST@GMAIL.COM';
    component.saveUser();
    expect(component.email).toEqual('TEST@GMAIL.COM');
  });

  it('Check the login method', () => {
    const routerstub: Router = TestBed.get(Router);
    component.password = 'A';
    expect(component.password).toEqual('A');
    expect(component.email).toEqual('TEST_CODE');
    component.login();
    expect(routerstub.navigate).toHaveBeenCalledWith(['admin/tables'])
  });
});
describe('LoginComponent error service', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const observable4 = new Subject();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule, ToastrModule.forRoot()],
      declarations: [
        LoginComponent
      ],
      providers: [
        HttpClient,
        LoadingService,
        UtilitiesService,
        ToastrService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
        {
          provide: CommunicatorService,
          useValue: {
            http_post() { return of({}); },
          },
        },
        {
          provide: LoginService,
          useValue: {
            login() { return observable4 },
          },
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    let localStore = {};

    spyOn(window.localStorage, 'getItem').and.callFake((key) =>
      key in localStore ? localStore[key] : 'TEST_CODE'
    );
    spyOn(window.localStorage, 'setItem').and.callFake(
      (key, value) => (localStore[key] = value + '')
    );

    spyOn(window.localStorage, 'clear').and.callFake(() => (localStore = {}));
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    observable4.error({code:'LG-0000',message:'Por favor revise el usuario o clave digitado.'});
    fixture.detectChanges();
  });

  it('Create', () => {
    expect(component).toBeTruthy();
  });

  it('Check the login error method', () => {
    component.password = 'A';
    component.isChecked = true;
    component.disable = false;
    expect(component.disable).toEqual(false);
    expect(component.isChecked).toEqual(true);
    expect(component.password).toEqual('A');
    expect(component.email).toEqual('TEST_CODE');
    component.login();
    expect(component).toBeTruthy();
  });

  it('Check the checkInfo method when the email is empty', () => {
    component.email = '';
    expect(component.checkInfo()).toEqual(true);
  });

  it('Check the checkInfo method when the password is not empty', () => {
    component.email = 'A@GMAIL.COM';
    component.password = 'A@GMAIL.COM';
    expect(component.checkInfo()).toEqual(false);
  });
});
