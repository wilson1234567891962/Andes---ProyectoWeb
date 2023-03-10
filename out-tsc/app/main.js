import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environmentProd } from './environments/environment.prod';
if (environmentProd.production) {
    enableProdMode();
}
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
//# sourceMappingURL=main.js.map