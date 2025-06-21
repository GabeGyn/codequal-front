import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpClient } from '../shared/custom-http-client';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  constructor(private client: CustomHttpClient) { }

  obterIngrediente(): Observable<any[]> {
    return this.client.get('/ingrediente');
  }

  inserirIngrediente(data: any): Observable<any> {
    return this.client.post('/ingrediente/', data)
  }

  atualizarIngrediente(data: any): Observable<any> {
    return this.client.put('/ingrediente/' + data.id, data)
  }
    
  apagarIngrediente(id: number): Observable<any> {
    return this.client.delete('/ingrediente/' + id)
  }
}
