import {Injectable, isDevMode} from '@angular/core';
import { Observable } from 'rxjs';
import {CommunicatorService} from './communicator.service';
import { environmentDev} from '../../environments/environment';
import {environmentProd} from '../../environments/environment.prod';
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL_SERVICES  = window.location.host.includes('localhost') ? environmentDev.URL_BACKEND_LOCAL : environmentProd.URL_PRODUCTION;
  private _orders: any = undefined;

  constructor(private communicatorService: CommunicatorService, private loginService: LoginService) { }

  getOrders(token: string): Observable<any>  {
    const body: any = {
      email: 'nrosenstengell9@ask.com',
    };
    return this.communicatorService.http_post( this.URL_SERVICES + 'ORDER/getOrder/', body, token);
  }

  get orders(): any {
    return this._orders;
  }

  set orders(value: any) {
    this._orders = value;
  }
}
