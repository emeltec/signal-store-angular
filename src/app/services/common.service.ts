import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  count = signal(2)

  constructor() { console.log(this.count()); }

}
