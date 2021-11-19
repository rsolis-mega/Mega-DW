import { Component } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { ServicioDwService } from '@core/services/servicio-dw.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ticket: string

  constructor(private servicio: ServicioDwService) {}

  ngOnInit() {
    // this.servicio.peticionTicket().subscribe(datos => {
    //   this.ticket = datos
    //   console.log(this.ticket)
    // })
  }

  ionViewWillEnter() {
    this.servicio.peticionTicket().subscribe(datos => {
      this.ticket = datos.Token
      console.log(this.ticket)
    })
  }

}
