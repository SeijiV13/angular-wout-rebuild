import { Injectable } from '@angular/core';
import { ConfigService } from 'src/providers/config.service';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private configService: ConfigService) {

   }

   getService() {
    return this.configService.environment;
   }
}
