import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { setAppOff, setAppOn } from "./store/app.actions";
import { AppState } from "./store/app.state";

/*
  /**
 * -- Primer Problema: / First Problem:
 *
 * Mostrar el contenido de los observables disponibles en el servicio ContentService
 * en el template del componente AppComponent. Adicionalmente:
 *  Title debe estar todo en mayúsculas
 *  Body debe estar todo en minúsculas
 *  Footer debe estar capitalizado
 * /
 * -- Segundo Problema: / Second Problem
 * Dependencias: Importar las dependencias de rxjs
 * Se necesita que cuando el usuario haga click en el botón "Change Title", asociado al componente ChangeContentComponent,
 * actualize el titulo ("title") que se ve en el componente AppComponent 
 * Nota: Importar las librerias necesarias de rxjs, cualquier otro medoto aparte de rxjs sera descartado
 * y la prueba se tomara como reprobada.
 * / 
 *
 * -- Tercer Problema / Third Problem 
 *
 * La aplicacion tiene configurado un Flux sencillo con ngrx, se necesita:
 * 1) Instanciar el state en el componente de AppComponent
 * 2) Mostrar los states en el Dom del AppComponent
 * 3) Adicionar un nuevo accion de reset que coloque en el objeto del tipo AppState { estado: false, title: "reseteado"}
 * en el template asociado al componente ChangeContentComponent 
 * 4) Revisar la funcion en el ContentService
*/

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title;
  body;
  footer;

  state$: Observable<AppState>;

  constructor(private store: Store<{ state: AppState }>) {}

  setOn() {
    this.store.dispatch(setAppOn({ estado: true, title: "encendido" }));
  }
  setOff() {
    this.store.dispatch(setAppOff({ estado: false, title: "apagado" }));
  }
}
