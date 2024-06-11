import {Component, OnInit, Input} from '@angular/core'

export declare type ibmIconSizeType = '16' | '20' | '24' | '32'

@Component({
  selector: 'youdrive-ibm-icon',
  templateUrl: './ibm-icon.component.html',
  styleUrls: ['./ibm-icon.component.scss']
})
export class IbmIconComponent implements OnInit {

  @Input() iconName = '';
  @Input() iconSize: ibmIconSizeType = '24';

  constructor() {
  }

  ngOnInit(): void {
  }

}
