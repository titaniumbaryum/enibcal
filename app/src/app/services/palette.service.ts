import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Palette } from '../structures/palette';

@Injectable()
export class PaletteService {

  constructor(private http:Http) { }
  get():Promise<any>{
    return this.http.get("http://10.3.61.133:4242/api/palette").toPromise()
    .then(response => {return response.json()})
    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
