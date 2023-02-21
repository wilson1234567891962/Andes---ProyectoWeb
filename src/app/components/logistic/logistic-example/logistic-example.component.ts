import {Component, Input, OnInit} from '@angular/core';
import {UtilitiesService} from '../../../services/utilities.service';
import {StoreService} from '../../../services/store.service';
import {LoginService} from '../../../services/login.service';
import {ToastrService} from 'ngx-toastr';

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
  detailProduct: any = {};
  productSearch = [];
  categoryList = [];
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

  constructor(private utilitiesService: UtilitiesService, private storeService: StoreService, private loginService: LoginService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getStore();
  }

  getCategories(): void {
    for (const item of this.product) {
      if (!this.categoryList.includes(item.state)) {
        this.categoryList.push(item.state);
      }
    }
  }

  getStore(): void {
        this.storeService.product = [
          {
            id: 1,
            name: 'Juan Perez',
            address: 'Calle 25 # 25-25',
            phone: 3135946070,
            state: 'PENDING',
          }
        ];
        this.product = [
          {
            id: 1,
            name: 'Pedro Gomez',
            address: 'Calle 25 # 25-25',
            phone: 3129445070,
            state: 'PENDING',
          },{
            id: 2,
            name: 'Manuel Pedraza',
            address: 'Calle 1 # 15-25',
            phone: 3145746070,
            state: 'PENDING',
          },{
            id: 3,
            name: 'David Rodriguez',
            address: 'Calle 35 # 75-15',
            phone: 3155946070,
            state: 'delivery',
          },{
            id: 4,
            name: 'Manuela Perez',
            address: 'Calle 28 # 75-35',
            phone: 3165946070,
            state: 'PENDING',
          },{
            id: 5,
            name: 'Maria Ruiz',
            address: 'Calle 100 # 5-35',
            phone: 3175946070,
            state: 'PENDING',
          },{
            id: 6,
            name: 'Sergio Perez',
            address: 'Calle 115 # 35-5',
            phone: 3185946070,
            state: 'PENDING',
          },{
            id: 7,
            name: 'Sara Rincon',
            address: 'Calle 40 # 55-25',
            phone: 3195946070,
            state: 'delivery',
          }
        ];
        this.setProduct();
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
      it.id.toString()===text ||
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
    this.visibleDetail = true;
    this.detailProduct = !this.searchIsVisible ? this.product[index].detail : this.productSearch[index].detail;
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

  convertDate(value) {
    return new Date(this.utilitiesService.changeFormatDate(value));
  }

  checkExpiration(value) {
    return !this.utilitiesService.validatorDate(this.convertDate(value), 3)
  }
}
