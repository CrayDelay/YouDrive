import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {YoudriveModule} from "../../@youdrive/youdrive.module"

@NgModule({
  imports: [
    CommonModule,
    YoudriveModule,
  ],
  declarations: [
  ],
  exports: [
    YoudriveModule,
  ]
})
export class SharedModule {
  constructor() {

  }
}
