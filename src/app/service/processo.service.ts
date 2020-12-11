import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Processo } from '../model/processo';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProcessoService {

  private processosUrl: string;

  constructor(private http: HttpClient) {
    this.processosUrl = 'http://localhost:8080/processos';
  }

  public findAll(): Observable<Processo[]> {
    return this.http.get<Processo[]>(this.processosUrl);
  }

  public save(processo: Processo) {
    return this.http.post<Processo>(this.processosUrl, processo);
  }

  getArquivo(id: number): any{    
     return this.http.get('http://localhost:8080/get/' + id, {responseType: "blob",  observe: 'response'});   
  }

  buscarPorId(id: number): Observable<Processo>{    
     return this.http.get<Processo>('http://localhost:8080/processo/' + id);
  }

}
