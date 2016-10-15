/* tree shaking: https://medium.com/@jonnysamps/angular-2-bundling-with-rollup-4738d0148a2c#.hsold1xr6 
lazy loading: https://medium.com/@daviddentoom/angular-2-lazy-loading-with-webpack-d25fe71c29c1#.doav8pf26 */

import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
