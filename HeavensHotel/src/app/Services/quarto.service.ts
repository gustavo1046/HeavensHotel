import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from '../../environments/environments';
import { Quarto } from '../Interfaces/Iquartos';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {
  constructor(private httpClient: HttpClient) { 
  }

  obterTodosQuartos(){
    return this.httpClient.get<Quarto[]>(`${API_PATH}quartos`);
  }

}
