import { Component } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent {
  produits:Produit[]=[
    {id:1,nom:"Pc",prix:0,quantite:12,urlimg:"./assets/img/pc.jpg"},
    {id:2,nom:"Smartphone",prix:1200,quantite:13,urlimg:"./assets/img/smartphone.jpg"},
    {id:3,nom:"Printer",prix:1300,quantite:50,urlimg:"./assets/img/printer.jpg"},
    {id:4,nom:"Camera",prix:3000,quantite:3,urlimg:"./assets/img/camera.jpg"}
  ];
  //produits!:any[]
  nb="masquer";

  afficher(){
    if(this.nb=="afficher"){
      this.nb = "masquer"
      }else{
        this.nb ="afficher"
      }
  }
}
