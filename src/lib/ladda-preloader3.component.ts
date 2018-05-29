import { Component, Input, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as Ladda from 'ladda';

@Component({
  selector: 'lib-ladda-preloader3',
  template: `
  <button class="ladda-button"
    [attr.data-color]="laddaColor"
    [attr.data-style]="laddaStyle"
    [attr.data-size]="laddaSize"
    [attr.data-spinner-size]="laddaSpinnerSize"
    [attr.data-spinner-lines]="laddaSpinnerLines">
      <span class="ladda-label">
        <ng-content></ng-content>
      </span>
  </button>
  `,
  styleUrls: [
    './../../node_modules/ladda/dist/ladda.min.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class LaddaPreloader3Component implements AfterViewInit {

  @Input('laddaColor') laddaColor: LaddaColor = 'blue';
  @Input('laddaStyle') laddaStyle: LaddaStyle = 'zoom-out';
  @Input('laddaSize') laddaSize: LaddaSize = 'm';
  @Input('laddaSpinnerSize') laddaSpinnerSize: number;
  @Input('laddaSpinnerLines') laddaSpinnerLines = 12;

  private laddaElement: any;

  constructor(private element: ElementRef) {
  }

  ngAfterViewInit() {
    this.laddaElement = Ladda.create(this.element.nativeElement.querySelector('.ladda-button'));
  }

  start(): void {
    this.laddaElement.start();
  }

  stop(): void {
    this.laddaElement.stop();
  }

  setProgress(progress: number): void {
    this.laddaElement.setProgress(progress);
  }

  toggle(): void {
    this.laddaElement.toggle();
  }

  isLoading(): boolean {
    return this.laddaElement.isLoading();
  }

  remove(): void {
    this.laddaElement.remove();
  }

}

export type LaddaColor = 'green' | 'red' | 'blue' | 'purple' | 'mint';
export type LaddaStyle = 'expand-left'
  | 'expand-right'
  | 'expand-up'
  | 'expand-down'
  | 'contract'
  | 'contract-overlay'
  | 'zoom-in'
  | 'zoom-out'
  | 'slide-left'
  | 'slide-right'
  | 'slide-up'
  | 'slide-down';
export type LaddaSize = 'xs' | 's' | 'm' | 'l' | 'xl';
