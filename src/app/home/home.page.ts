import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  private rutaLed1: any;
  private rutaLed2: any;
  private rutaLed3: any;
  private rutaLeds: any;

  private refLed: any;
  ledEncendido1: boolean = false;
  ledEncendido2: boolean = false;
  ledEncendido3: boolean = false;
  ledsEncendidos: boolean = false;

  constructor(private db:Firestore) {
  }

  /*async encender() {
    this.rutaLed1 = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
    await setDoc(this.rutaLed1, { encender: true });//CAMBIA EL ATRIBUTO DE LA TABLA
}

  async apagar() {
    this.rutaLed1 = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
    await setDoc(this.rutaLed1, { encender: false });//CAMBIA EL ATRIBUTO DE LA TABLA
  }*/

  async ledState1(){
    this.rutaLed1 = doc(this.db,'controlLED','LED1');
    this.ledEncendido1=!this.ledEncendido1;
    await setDoc(this.rutaLed1, { encender: this.ledEncendido1 });
  }

  async ledState2(){
    this.rutaLed2 = doc(this.db,'controlLED','LED2');
    this.ledEncendido2=!this.ledEncendido2;
    await setDoc(this.rutaLed2, { encender: this.ledEncendido2 });
  }

  async ledState3(){
    this.rutaLed3 = doc(this.db,'controlLED','LED3');
    this.ledEncendido3=!this.ledEncendido3;
    await setDoc(this.rutaLed3, { encender: this.ledEncendido3 });
  }

  async toggleAllLeds() {
    const rutaLed1 = doc(this.db, 'controlLED', 'LED1');
    const rutaLed2 = doc(this.db, 'controlLED', 'LED2');
    const rutaLed3 = doc(this.db, 'controlLED', 'LED3');
    
    const allLedsOn = !(this.ledEncendido1 && this.ledEncendido2 && this.ledEncendido3);
    
    this.ledEncendido1 = allLedsOn;
    this.ledEncendido2 = allLedsOn;
    this.ledEncendido3 = allLedsOn;
    
    await setDoc(rutaLed1, { encender: allLedsOn });
    await setDoc(rutaLed2, { encender: allLedsOn });
    await setDoc(rutaLed3, { encender: allLedsOn });
  }


}
