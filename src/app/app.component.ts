import { Component } from '@angular/core';
import { ConfigService } from 'src/providers/config.service';
import { MockService } from './mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-wout-rebuild';
  url = this.configService.url;
  env = this.configService.environment;
  constructor(private configService: ConfigService, private mockService: MockService) {
    console.log(this.url);
    console.log(this.env);
    this.testService();
  }

  testService() {
    console.log(this.mockService.getService());
  }
}
