import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
export class AppDropdownDirective {

  @HostBinding('class.open') classOpen = false;

  // @Input() hoverBackground;
  // @Input('appDropdown') hoverBackground;


  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  // }
  //
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.hoverBackground);
  // }
  //
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  // }

  @HostListener('click') onClick() {
    this.classOpen = !this.classOpen;
  }

}
