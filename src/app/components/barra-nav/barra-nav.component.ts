import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/Services/porfolio.service';


@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.miPorfolio = data;
    });   
  } 
}
