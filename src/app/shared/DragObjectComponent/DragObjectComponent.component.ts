import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DragObject } from 'src/app/models/DragObject';

@Component({
  selector: 'app-DragObjectComponent',
  templateUrl: './DragObjectComponent.component.html',
  styleUrls: ['./DragObjectComponent.component.css']
})
export class DragObjectComponentComponent extends DragObject implements OnInit {

  @ViewChild('mydrag') myDrag: ElementRef<any> | undefined;

  constructor() { 
    super();
  }
ngOnInit(): void {
    
}
   ngAfterViewInit() {
    if(this.myDrag){
      this.initOservable(this.myDrag);
    }
  }

}
