import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/_Services/config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  isCollapsed = false;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.flag = 0;
  }

  ngOnDestroy(){
    this.configService.flag = 1;
  }

}
