import { Directive, Input } from '@angular/core';

import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive (
  {
    selector: '[appVisibility]'
  }
)

export class VisibilityDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appVisibility(visible: boolean) {
    if (!visible) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
