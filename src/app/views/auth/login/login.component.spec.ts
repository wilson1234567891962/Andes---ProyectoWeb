import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {LoginService} from '../../../services/login.service';
import {RouterTestingModule} from '@angular/router/testing';
import {UtilitiesService} from '../../../services/utilities.service';
import {Router} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {of} from 'rxjs';
import {CommunicatorService} from '../../../services/communicator.service';
import {LoadingService} from '../../../services/loading.service';
import {ToastrService} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
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
            login() { return of({}); },
          },
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Create', () => {
    expect(component).toBeTruthy();
  });
});
