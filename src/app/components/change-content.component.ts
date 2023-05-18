import { Component } from "@angular/core";

@Component({
  selector: "change-content",
  template: `
    <section>
      <div class="card">
        <button>Change Title</button>
        <button>Call Api</button>
        <section>Connection to API Success</section>
        <section>Connection to API Failed</section>
      </div>
    </section>
  `
})
export class ChangeContentComponent {
  newTitle = "Este es el titulo modificado por otro componente";
  hasError = false;
  hasContent = false;

  // Realiar las importaciones de servicios correspondientes
  constructor() {}

  changeTitle() {
    // Desarrollar el cuerpo del método / Develop the method body
  }

  callApi() {
    // Desarrollar el cuerpo del método / Develop the method body
  }
}
