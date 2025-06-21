import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpClient } from '../shared/custom-http-client';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private client: CustomHttpClient) { }

  obterReceita(): Observable<any[]> {
    return this.client.get('/receita');
  }

  inserirReceita(data: any): Observable<any> {
    return this.client.post('/receita/', data)
  }

  atualizarReceita(data: any): Observable<any> {
    return this.client.put('/receita/' + data.id, data)
  }
    
  apagarReceita(id: number): Observable<any> {
    return this.client.delete('/receita/' + id)
  }
}
