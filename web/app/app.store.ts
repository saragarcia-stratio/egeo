import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface State {
   /// defeine your state here
};

const defaultState: State = {
   /// define your initial state here
};

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class AppStore {

   public change: Observable<any> = this._store
      .asObservable()
      .distinctUntilChanged();

   private _store: any = _store;

   setState(state: State): void {
      this._store.next(state);
   }

   getState(): State {
      return this._store.value;
   }

   purge(): void {
      this._store.next(defaultState);
   }
}
