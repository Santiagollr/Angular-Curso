import { Component} from '@angular/core';

@Component({
  selector: 'app-listado2',
  templateUrl: './listado2.component.html',
})

export class Listado2Component{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];


  heroeBorrado: string = '';

  borrarHeroes(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
