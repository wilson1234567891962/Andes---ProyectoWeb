import {Component, Input, OnInit} from '@angular/core';
import {UtilitiesService} from '../../../services/utilities.service';
import {LoginService} from '../../../services/login.service';
import {ToastrService} from 'ngx-toastr';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-logistic-example',
  templateUrl: './logistic-example.component.html',
})
export class LogisticExampleComponent implements OnInit {
  state='';
  searchIsVisible = false;
  visibleDetail = false;
  selectionIndex = 1;
  productsTmp = [];
  detailProduct: any = [];
  productSearch = [];
  categoryList = [];
  stateList=['PENDING','PROCESS','CANCELED','RUNNING'];
  storeList = [];
  product = [];

  @Input()
  get color(): string {
    return this._color;
  }

  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }

  private _color = 'light';

  constructor(private utilitiesService: UtilitiesService, private orderService: OrderService, private loginService: LoginService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getCategories(): void {
    for (const item of this.product) {
      if (!this.categoryList.includes(item.state)) {
        this.categoryList.push(item.state);
      }
    }
  }


  getOrders(): void {
    if (this.orderService.orders === undefined) {
      this.orderService.getOrders(this.loginService.tokenSecret).subscribe(it => {
        this.orderService.orders = it.data;
        this.product = it.data;
        this.setProduct();
      }, error => {
        this.toastr.error(error.error.code +': ' +  error.error.message, 'Error', {
          timeOut: 7000,
        });
      })

    } else {
      this.product = this.orderService.orders;
      this.setProduct();
    }
  }

  setProduct(): void {
    for (const item of this.product) {
      if (!this.storeList.includes(item.name)) {
        this.storeList.push(item.name);
      }
    }
    this.goItemPagination(1, this.product);
    this.getCategories()
  }

  goItemPagination(count, data) {
    this.visibleDetail = false;
    data = !this.searchIsVisible ? this.product : this.productSearch;
    const paginate = this.utilitiesService.paginate(data.length, count, 5, 5);
    if (count < 1 || count > paginate.totalPages) {
      return;
    }
    this.selectionIndex = count;
    this.productsTmp = new Array();
    for (let i = paginate.startIndex; i <= paginate.endIndex; i++) {
      this.productsTmp.push(data[i]);
    }
  }

  onChangeEvent(event: any) {
    const text = event.target.value.toString().toLowerCase();
    this.state = '';
    if (text.length < 0) {
      this.searchIsVisible = false;
      this.productSearch = [];
      this.goItemPagination(this.selectionIndex, this.product);
      return;
    }
    this.searchIsVisible = true;
    const result = this.product.filter(it =>
      it.idOrder.toString()===text ||
      it.name.toString().toLowerCase().includes(text) ||
      it.state.toString().toLowerCase().includes(text)||
      it.address.toString().toLowerCase().includes(text)||
      it.phone.toString().toLowerCase().includes(text)
    );
    this.productSearch = result;
    this.productsTmp = new Array();
    this.selectionIndex = 1;
    this.goItemPagination(this.selectionIndex, result);
  }

  checkDetailProduct(index) {
     const store = {...this.productsTmp[index]};
     if(!this.detailProduct.some(elem => elem === store)){
       this.detailProduct.push(store);
     }
  }

  search() {
    if (this.state === '') {
      return;
    }
    const result = this.product.filter(it =>
      it.state.toString().toLowerCase() === this.state.toLowerCase()
    );
    this.searchIsVisible = true;
    this.productSearch = result;
    this.productsTmp = new Array();
    this.selectionIndex = 1;
    this.goItemPagination(this.selectionIndex, result);
  }

  clean() {
    this.state = '';
    this.searchIsVisible = false;
    this.productSearch = [];
    this.goItemPagination(this.selectionIndex, this.product);
  }
  orderClear(){
    this.detailProduct = [];
  }
  getState(state:string) {
    const clone = Object.assign([], this.stateList);
    const index=clone.indexOf(state)
    clone.splice(index,1);
    return clone;
  }
  onChangeState(event:any,store:any){
    console.log(this.detailProduct);
    console.log(JSON.stringify(this.product))
    store.state=event.target.value;
    console.log(this.detailProduct);
  }
}
