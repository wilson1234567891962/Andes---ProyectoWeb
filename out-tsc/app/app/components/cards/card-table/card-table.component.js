import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CardTableComponent = class CardTableComponent {
    constructor() {
        this.visibleDetail = false;
        this.selectionIndex = 1;
        this.productsTmp = [];
        this.product = [
            {
                product: 'Coca Cola A1',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A2',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A3',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A4',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A5',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A6',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A7',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A8',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A9',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A10',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A11',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A12',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A13',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A14',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A15',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A16',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            },
            {
                product: 'Coca Cola A17',
                imageProduct: 'assets/img/bootstrap.jpg',
                store: 'Andino',
                supplier: 'Coca Cola',
                importer: 'N/A',
                amount: 10
            }
        ];
        this._color = 'light';
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
    }
    ngOnInit() {
        this.goItemPagination(1);
    }
    goItemPagination(count) {
        if (this.selectionIndex > 1) {
            break;
        }
        this.selectionIndex = count;
        this.productsTmp = new Array();
        const paginate = this.paginate(this.product.length, this.selectionIndex, 5, 5);
        for (let i = paginate.startIndex; i <= paginate.endIndex; i++) {
            this.productsTmp.push(this.product[i]);
        }
    }
    checkDetailProduct() {
        this.visibleDetail = true;
    }
    paginate(totalItems, currentPage = 1, pageSize = 10, maxPages = 10) {
        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        let startPage;
        let endPage;
        if (totalPages <= maxPages) {
            // total pages less than max so show all pages
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // total pages more than max so calculate start and end pages
            const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
            const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                // current page near the start
                startPage = 1;
                endPage = maxPages;
            }
            else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                // current page near the end
                startPage = totalPages - maxPages + 1;
                endPage = totalPages;
            }
            else {
                // current page somewhere in the middle
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }
        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        // return object with all pager properties required by the view
        return {
            totalItems,
            currentPage,
            pageSize,
            totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages
        };
    }
};
__decorate([
    Input()
], CardTableComponent.prototype, "color", null);
CardTableComponent = __decorate([
    Component({
        selector: 'app-card-table',
        templateUrl: './card-table.component.html',
    })
], CardTableComponent);
export { CardTableComponent };
//# sourceMappingURL=card-table.component.js.map