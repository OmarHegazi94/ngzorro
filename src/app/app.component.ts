import { ChangeDetectorRef, Component } from '@angular/core';
import { ConfigService } from './_Services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  // isCollapsed = false;

  show = 1;

  constructor(public congfigService: ConfigService, private changeDetectorRef: ChangeDetectorRef){}

  // check if flag changes , tell change detector to update view
  ngAfterViewChecked() : void {
    let show = this.congfigService.flag;

    if(show != this.show) {
      this.show = show;

      this.changeDetectorRef.detectChanges();
    }
  }


  ngOnInit() {
    this.show = this.congfigService.flag;
  }
}
