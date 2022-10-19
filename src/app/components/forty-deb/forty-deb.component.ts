import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/Services/porfolio.service';


@Component({
  selector: 'app-forty-deb',
  templateUrl: './forty-deb.component.html',
  styleUrls: ['./forty-deb.component.css']
})
export class FortyDebComponent implements OnInit {
  fortydebList: any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.fortydebList = data.aptitudes;
   }); 
  }

}
