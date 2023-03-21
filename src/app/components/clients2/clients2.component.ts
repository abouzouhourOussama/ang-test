import { Component } from '@angular/core';
import listeClientsJson from '../../data/data.json';
@Component({
  selector: 'app-clients2',
  templateUrl: './clients2.component.html',
  styleUrls: ['./clients2.component.css']
})
export class Clients2Component {
    listClients:any[]=listeClientsJson;

}
