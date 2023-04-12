"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const login_component_1 = require("./login.component");
const login_service_1 = require("../../../services/login.service");
const utilities_service_1 = require("../../../services/utilities.service");
const ngx_toastr_1 = require("ngx-toastr");
const router_1 = require("@angular/router");
describe('LoginComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [],
            declarations: [login_component_1.LoginComponent],
            providers: [login_service_1.LoginService, utilities_service_1.UtilitiesService, ngx_toastr_1.ToastrService,
                {
                    provide: router_1.Router,
                    useValue: {
                        navigate: jasmine.createSpy('navigate'),
                    },
                },
            ]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(login_component_1.LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('Create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=login.component.spec.js.map