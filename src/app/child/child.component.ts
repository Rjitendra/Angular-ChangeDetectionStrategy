import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() names!: string[];
  @Input() fruits!: Observable<string[]>;
  @Input() clearFruits!: Observable<string[]>;
  fruitsArray: string[] = [];
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.fruits.subscribe((frute) => {
      this.fruitsArray = [...this.fruitsArray, ...frute];
      this.cd.markForCheck();
    });
    this.clearFruits.subscribe((res: string[]) => {
      if (res.length != 0) {
        return;
      }
      this.fruitsArray = [];
      this.cd.markForCheck();
    });
  }

  refresh() {
    this.cd.detectChanges();
  }
}
