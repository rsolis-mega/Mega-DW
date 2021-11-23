import { Component } from '@angular/core';
import { ServicioDwService } from '@core/services/servicio-dw.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cadena: string
  cadena2: string

  constructor(private servicio: ServicioDwService) {}

  ngOnInit() {
    this.servicio.peticionTicket().subscribe(datos => {
      this.cadena = `http://192.168.25.17/trusted/${datos.Token}/views/Datosgenerales/Dashboard2?:origin=card_share_link&:embed=yes`
      document.getElementById("show").setAttribute('src', this.cadena)
    })

    this.servicio.peticionTicket().subscribe(data => {
      this.cadena2 = `http://192.168.25.17/trusted/${data.Token}/views/Datosgenerales/Dashboard1?:origin=card_share_link&:embed=yes`
      document.getElementById("show2").setAttribute('src', this.cadena2)
    })
  }

  ionViewWillEnter() {
    
  }

}
