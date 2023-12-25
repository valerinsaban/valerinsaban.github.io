import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  async getProyectos(){
    let proyectos: any = await this.http.get('assets/data/proyectos.json').toPromise(); 
    proyectos = JSON.parse(JSON.stringify(proyectos));

    let categorias: any = await this.getCategorias();
    categorias = JSON.parse(JSON.stringify(categorias));
    
    proyectos.forEach((p: any) => {
      p.categoria = categorias.find((c: any) => c.slug == p.categoria)
    })
    
    return proyectos
  }

  async getCategorias(){
    return await this.http.get('assets/data/categorias.json').toPromise();
  }
  
}
