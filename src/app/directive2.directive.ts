import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[ngIfAmalinalli]',
})
export class Directive2Directive implements OnChanges {
  @Input() ngIfAmalinalli = true;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    /* if (this.ngIfAmalinalli) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }*/
  }
  ngOnChanges(changes: any) {
    console.log('changes: ', changes.ngIfAmalinalli.currentValue);
    this.setViewContainer(changes.ngIfAmalinalli.currentValue);
  }

  setViewContainer(show: boolean) {
    if (show) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
