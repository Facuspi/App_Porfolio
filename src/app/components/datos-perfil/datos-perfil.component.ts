import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/Services/porfolio.service';


@Component({
  selector: 'app-datos-perfil',
  templateUrl: './datos-perfil.component.html',
  styleUrls: ['./datos-perfil.component.css']
})
export class DatosPerfilComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.miPorfolio = data;
    });
  }

}
