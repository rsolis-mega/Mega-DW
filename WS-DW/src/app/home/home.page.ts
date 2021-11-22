import { Component } from '@angular/core';
import { ServicioDwService } from '@core/services/servicio-dw.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ticket: string
  cadena: string

  constructor(private servicio: ServicioDwService) {}

  ngOnInit() {
    this.servicio.peticionTicket().subscribe(datos => {
      this.cadena = `http://192.168.25.17/trusted/${datos.Token}/views/Datosgenerales/Dashboard2?:origin=card_share_link&:embed=yes`
      document.getElementById("show").setAttribute('src', this.cadena)
    })
  }

  ionViewWillEnter() {
    // this.servicio.peticionTicket().subscribe(datos => {
    //   this.ticket = datos.Token
    //   console.log(this.ticket)
    // })
  }

}
