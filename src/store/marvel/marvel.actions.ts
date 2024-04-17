import { createAction, props } from "@ngrx/store";
import { Marvel } from "src/app/models/marvel.model";

export const searchMarvel = createAction('[Marvel] Search', props<{ query: string }>());
export const searchMarvelSuccess = createAction('[Marvel] Search Success', props<{ heroes: Marvel[] }>());
export const searchMarvelFailure = createAction('[Marvel] Search Failure', props<{ error: Error }>());
export const selectMarvel = createAction('[Marvel] Select', props<{ hero: Marvel }>());
export const additionalGptInfo = createAction('[Marvel] GPT Additional Information', props<{ additionalInfo: string }>());
export const additionalGptInfoSuccess = createAction('[Marvel] GPT Additional Information Success', props<{ additionalInfo: string }>());
export const additionalGptInfoFailure = createAction('[Marvel] GPT Additional Information Failure', props<{ error: Error }>());
export const clearAdditionalGptInfo = createAction('[Marvel] Clear GPT Additional Information');


