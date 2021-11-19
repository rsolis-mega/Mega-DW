import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { URL } from '@core/constantes'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioDwService extends ApiService {
  /**
   * 
   * @returns 
   */
  public peticionTicket(): Observable<any> {
    return this.get(`${URL.API}/get-ticket`)
  }
}
