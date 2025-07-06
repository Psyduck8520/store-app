import {Component, Input, OnInit,Output, EventEmitter , OnChanges , SimpleChange} from '@angular/core';
import {count} from "rxjs";

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent  implements OnInit  {
  img: string = '';

  @Input('img')
  set changeImage(newImage: string) {
      this.img = newImage;
      console.log('Metodo chage image' , this.img);
      // aki ya podemos poner un codigo
  }

  @Input() alt : string = '';


  @Output() loaded = new EventEmitter<string>();
  imageDefault  = "./assets/images/default.png";
  counter = 0;
  counterFn : number |  undefined;

  constructor(){
     //El constructor corre antes de renderizar
    //NO se  deben  correr cosas de forma asincrona  y solo se corre una vez, cada componente  corre una vez
    //console.log('Constructlor',  'imgValue =>' , this.img);

  }
  ngOnChanges( changes: SimpleChange   ) {
    //  before render y durante para  inspeccionar los cambios,
    // changes   inputs --times , corre las veces que actualizamos un input
    //console.log('ngOnchages',  'imgValue =>' , this.img);
    //console.log( 'Changes' ,changes); // de esta manera evaluamos todos los cambios
    //Me dice cual  fue el anterior  valor y cual es el nuevo  valor
  }
  ngOnInit() {
    //Before  render, angular  tiene que montar y  prepararlo, antes  del render podemos  correr cosas asyncronas fetch llamadas  API , promesas
    //Cualquier cosa que  necesita una espera, solo  corre una vez,  un error a veces se piensa que  los inputs  lo usan pero no  estos estan en el ngonchange

     // this.counterFn  =  window.setInterval(() => {
      //this.counter+=1;
      //console.log('Run countr', this.counter);
      //}
      //, 1000 );  // esta  funcion  no es un a buena práctica

    //console.log('ngOnInit',  'imgValue =>' , this.img);
  }
  ngAfterViewInit() {
    //Despues de redenrizan
    //Si queremos modificar los hijos lo hacemos  aki
    //console.log('ngAfterViewInit');
  }
  ngOnDestroy() {
     // estes  es cuando se elimina el componente,
    //corre  solo cuando  damos  elminar  el componente  el componente deja  de existi
   // console.log('ngOnDestroy');
     //window.clearInterval(this.counterFn ); // Aqui mata los evento que aun se queda vivo.
  }

  imgError (){
    this.img =  this.imageDefault;

  }
  imgLoaded( ){
    console.log("Log hijo");
    this.loaded.emit(this.img); // a le estamos pasando
    // la URL del hijo
  }

  protected readonly count = count;

  }
