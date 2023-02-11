import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ConfigService } from './providers/config.service';

fetch('config/config.json')
  .then((response) => response.json())
  .then((config) =>
    platformBrowserDynamic([
      {
        provide: ConfigService,
        useValue: config,
      },
    ]).bootstrapModule(AppModule),
  )
  .catch((err) => console.error(err));
