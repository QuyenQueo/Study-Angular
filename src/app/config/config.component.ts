import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({

})

export class ConfigComponent {
  constructor(private configService: ConfigService) {}
  showConfig() {
    this.configService.getConfig().subscribe(data => this.config = {
      heroesUrl: data['heroesUrl'],
      textfile: data['textfile']
    })
  }
}