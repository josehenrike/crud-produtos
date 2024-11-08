import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({

    title: 'Inicio',
    icon: 'home',
    routeUrl: ''
  });

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(newHeaderData: HeaderData) {
    this._headerData.next(newHeaderData);
  }
}
