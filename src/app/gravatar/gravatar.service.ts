import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import {Md5} from 'ts-md5/dist/md5'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GravatarService {
  constructor(private jsonp: Jsonp) {}
  getProfile (email: string): Promise<JSON[]> {
    let hash = Md5.hashStr(email)
    return this.jsonp.get('//pt.gravatar.com/' + hash + '.json?callback=JSONP_CALLBACK')
        .toPromise()
        .then(response => response.json() as JSON[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}