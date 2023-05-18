import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ContentService {
  private title: BehaviorSubject<string> = new BehaviorSubject(
    "Este es el titulo"
  );
  private body: BehaviorSubject<string> = new BehaviorSubject(
    "Este es el contenido principal de la pagina"
  );

  private footer: BehaviorSubject<string> = new BehaviorSubject(
    "Este es el footer "
  );

  private title$ = this.title.asObservable();
  private body$ = this.body.asObservable();
  private footer$ = this.footer.asObservable();

  constructor() {}

  getTitle() {
    return this.title$;
  }

  getBody() {
    return this.body$;
  }

  getFooter() {
    return this.footer$;
  }

  changeTitle() {
    // Desarrollar el cuerpo del método / Develop the method body
  }

  // Describir que hace esta funcion con datos ficticios (nota): la url no existe
  // describir a detalle que hace la funcion
  getContent() {
    const url = "https://sitenotexist.com/content/0";

    return this.http.get(url).pipe(
      retry(2),
      map(() => "Respuesta modificada por el servicio"),
      catchError((error) => of(error)),
      tap((value) => console.log("check for value", value)),
      map(() => ["Respuesta modificada por el servicio nuevamente"])
    );
  }
}
