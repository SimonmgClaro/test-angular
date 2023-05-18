import { createAction, props } from "@ngrx/store";
import { AppState } from "./app.state";

export const setAppOn = createAction("[App] on", props<AppState>());
export const setAppOff = createAction("[App] off", props<AppState>());
