import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { heroReducer } from './marvel/marvel.reducers';
import { loadingReducer } from './loading/loading.reducers';
import { connectionReducer } from './connection/connection.reducers';
import { MarvelEffects } from './marvel/marvel.effects';
import { ConnectionEffects } from './connection/connection.effects';

@NgModule({
  imports: [

    StoreModule.forFeature('hero', heroReducer),
    StoreModule.forFeature('loading', loadingReducer),
    StoreModule.forFeature('connection', connectionReducer),

    EffectsModule.forFeature([MarvelEffects]),
    EffectsModule.forFeature([ConnectionEffects]),

  ]
})
export class StateModule { }
