import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  asapScheduler,
  pipe,
  of,
  from,
  interval,
  merge,
  fromEvent
} from 'rxjs';
import { map, scan, filter, flatMap } from 'rxjs/operators';
import { Goodie } from '../models/Goodie';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {
  public goodieList = [
    {
      id: 'brownie-pillow',
      name: 'Brownie Pillow Cookie',
      count: 53,
      likes: 110
    },
    { id: 'apple-pie', name: 'Talenti Pistachio', count: 23, likes: 87 },
    { id: 'snicker-doo', name: 'SnickerDoodle', count: 100, likes: 25 },
    { id: 'dulce-wonder', name: 'Dulce de Wonderful', count: 205, likes: 72 }
  ];

  constructor() {}

  public getGoodies(): Observable<Goodie[]> {
    return of(this.goodieList);
  }

  public getGoodie(id): Observable<Goodie> {
    return this.getGoodies().pipe(
      flatMap(data => data),
      filter(g => g.id === id)
    );
  }

  public likeGoodie(id): void {
    this.getGoodie(id).subscribe(goodie => {
      const idx = this.goodieList.findIndex(g => g.id === id);
      this.goodieList[idx].likes++;
    });
  }
}
