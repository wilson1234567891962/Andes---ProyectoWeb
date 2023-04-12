"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const header_stats_component_1 = require("./header-stats.component");
const card_stats_component_1 = require("../../cards/card-stats/card-stats.component");
describe('HeaderStatsComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [header_stats_component_1.HeaderStatsComponent, card_stats_component_1.CardStatsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(header_stats_component_1.HeaderStatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('Create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=header-stats.component.spec.js.map