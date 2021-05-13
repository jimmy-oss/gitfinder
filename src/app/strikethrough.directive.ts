import { Directive, ElementRef,HostListener } from '@angular/core';


@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
  
  constructor(private elem:ElementRef) {}

    @HostListener("click") onClicks(){
      this.textDeco("line-through")
    }
    @HostListener("dblclick") onDoubleCLicks(){
      this.textDeco("none")
    }
    private textDeco(action:string){
      this.elem.nativeElement.style.testDecoration=action;
    }

}
