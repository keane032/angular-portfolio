import { Component, ElementRef, Input } from "@angular/core";
import { fromEvent, takeUntil } from "rxjs";

@Component({
  template: ''
})
export class DragObject{

    @Input() top:number = 40;
    @Input() left:number = 40;

    initOservable(elementRef: ElementRef){
        const mousedown = fromEvent<MouseEvent>(elementRef.nativeElement, 'mousedown');
        const mousemove = fromEvent<MouseEvent>(document, 'mousemove');
        const mouseup = fromEvent<MouseEvent>(document, 'mouseup');

        mousedown.subscribe((e: MouseEvent) => {
            var x = e.screenX;
            var y = e.screenY;

            mousemove.pipe(takeUntil(mouseup)).subscribe((em: MouseEvent) => {
                console.log(em)   
                let offsetx = x - em.screenX;
                let offsety = y - em.screenY;
                this.top -= offsety
                this.left -= offsetx
                x = em.screenX
                y = em.screenY
            })

        })

    }

}