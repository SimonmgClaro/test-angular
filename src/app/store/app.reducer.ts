import { createReducer, on } from "@ngrx/store";
import { setAppOn, setAppOff } from "./app.actions";

export const appReducer = createReducer(
  {},
  on(setAppOn, (state, data) => {
    return { ...state, data };
  }),
  on(setAppOff, (state, data) => {
    return { ...state, data };
  })
);
