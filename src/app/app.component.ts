import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import moment from 'moment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  categorias: any = [];
  proyectos: any = [];

  constructor(
    private dataService: DataService
  ) {}

  async ngAfterViewInit() {
    await this.getCategorias();
    await this.getProyectos();
  }

  async getCategorias() {
    this.categorias = await this.dataService.getCategorias();
  }

  async getProyectos() {
    this.proyectos = await this.dataService.getProyectos();
  }

  get edad() {
    return moment().diff('2000-12-12', 'years');
  }

}
