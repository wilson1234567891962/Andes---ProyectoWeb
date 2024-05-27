import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {Router} from '@angular/router';
import {UtilitiesService} from '../../../services/utilities.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router,
              public utilitiesService:UtilitiesService, private toastr: ToastrService) {}
  private _email = '';
  private _password = '';
  private _isChecked = false;
  private _disable=false;

  ngOnInit(): void {
    this.checkIsSaveUser();
  }

  checkIsSaveUser() {
    const emailSaved = localStorage.getItem('USER_ACTIVE');
    if(emailSaved !== undefined && emailSaved !== 'null' && emailSaved !== ''){
       this._email = emailSaved;
       this._isChecked = true;
    }
  }
  checkInfo(){
    return !this.utilitiesService.validatorsFields(this._email) ||
      !this.utilitiesService.validatorsFields(this._password)||
      !this.utilitiesService.validatorsEmail(this._email);
  }
  saveUser() {
    if(!this._isChecked)  {
      this._isChecked = true;
      localStorage.setItem('USER_ACTIVE', this._email);
    } else   {
      this._isChecked = false;
      localStorage.setItem('USER_ACTIVE', '');
    }
  }

  login(){
    this.loginService.user = this._email;
    this.loginService.password = this._password;
    if(this._isChecked)  {
      localStorage.setItem('USER_ACTIVE', this._email);
    }

    if(this.loginService.user === 'melisa@gmail.com' && this.loginService.password === '1234')  {
      localStorage.setItem('USER_ACTIVE', this._email);
      this.loginService.tokenSecret = 'TestCode';
      this.loginService.rol = '1';
      this.router.navigate(['admin/tables']);
    }
  }


  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get isChecked(): boolean {
    return this._isChecked;
  }

  set isChecked(value: boolean) {
    this._isChecked = value;
  }

  get disable(): boolean {
    return this._disable;
  }

  set disable(value: boolean) {
    this._disable = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
