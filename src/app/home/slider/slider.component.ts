import {
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { SliderItemComponent } from './slider-item/slider-item.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],

})
export class SliderComponent implements AfterViewInit {
  @ContentChildren(SliderItemComponent)
  children: QueryList<SliderItemComponent>;

  public step: number = 0;
  public transformStyle: string = 'translateX(0)';
  public stepCount: number = 2;

  constructor() {}

  ngAfterViewInit(): void {
    this.stepCount = this.children.length;
  }

  setStep(index: number) {
    this.step = index;
    this.updateTransformStyle();
  }

  moveStep(): void {
    if (this.step === 1) {
      this.step--;
      this.updateTransformStyle();
    }
    else{
      this.step++;
      this.updateTransformStyle();
    }
  }

  private updateTransformStyle(): void {
    this.transformStyle = `translateX(-${this.step * (100 / this.stepCount)}%)`;
  }
}
