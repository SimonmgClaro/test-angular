import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ChangeContentComponent } from "./change-content.component";

@NgModule({
  declarations: [ChangeContentComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [ChangeContentComponent]
})
export class ChangeContentModule {}
