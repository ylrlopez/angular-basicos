import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';




@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})
export class HeroeComponent{

    nombre: string = "Ironman";
    edad: number = 45

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

cambiarNombre():void{
    this.nombre = "Spiderman";
}

cambiarEdad(): void {
    this.edad = 30;
}


}