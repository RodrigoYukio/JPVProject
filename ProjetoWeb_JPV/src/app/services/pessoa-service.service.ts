import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../models/Pessoas';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiUrl = `${environment.baseApiUrl}/Pessoa`

  constructor(private http: HttpClient) { }


  GetPessoas() : Observable<Response<Pessoa[]>> {
      return this.http.get<Response<Pessoa[]>>(`${this.apiUrl}/buscar-todos`);
  }

  GetPessoa(id: number) : Observable<Response<Pessoa>> {
    return this.http.get<Response<Pessoa>>(`${this.apiUrl}/id?id=${id}`);
  }

  CreatePessoa(pessoa: Pessoa) : Observable<Response<Pessoa[]>> {
    return this.http.post<Response<Pessoa[]>>(`${this.apiUrl}`, pessoa);
  }

  EditPessoa(pessoa : Pessoa) : Observable<Response<Pessoa[]>> {
      return this.http.put<Response<Pessoa[]>>(`${this.apiUrl}`, pessoa);
  }

  ExcluirPessoa(id: number) : Observable<Response<Pessoa[]>>{
    return this.http.delete<Response<Pessoa[]>>(`${this.apiUrl}?id=${id}`)
  }
}
