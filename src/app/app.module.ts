import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { ChangeContentModule } from "./components/change-content.module";
import { AppComponent } from "./app.component";
import { appReducer } from "./store/app.reducer";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ChangeContentModule,
    StoreModule.forRoot({ state: appReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
