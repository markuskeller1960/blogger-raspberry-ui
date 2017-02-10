import { Directive, Input } from '@angular/core';

import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive (
  {
    selector: '[appCollapsible]'
  }
)

export class CollapsibleDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appCollapsible(visible: boolean) {
    if (!visible) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
