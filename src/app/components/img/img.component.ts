import {Component, Input, OnInit,Output, EventEmitter , OnChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent  implements OnInit  {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault  = "./assets/images/default.png";
  constructor(){
     //El constructor corre antes de renderizar
    //NO se  deben  correr cosas de forma asincrona  y solo se corre una vez, cada componente  corre una vez
    console.log('Constructlor',  'imgValue =>' , this.img);

  }
  ngOnChanges() {
    //  before render y durante para  inspeccionar los cambios,
    // changes   inputs --times , corre las veces que actualizamos un input
    console.log('ngOnchages',  'imgValue =>' , this.img);

  }
  ngOnInit() {
    //Before  render, angular  tiene que montar y  prepararlo, antes  del render podemos  correr cosas asyncronas fetch llamadas  API , promesas
    //Cualquier cosa que  necesita una espera, solo  corre una vez,  un error a veces se piensa que  los inputs  lo usan pero no  estos estan en el ngonchange
    console.log('ngOnInit',  'imgValue =>' , this.img);
  }
  ngAfterViewInit() {
    //Despues de redenrizan
    //Si queremos modificar los hijos lo hacemos  aki
    console.log('ngAfterViewInit');
  }
  ngOnDestroy() {
     // estes  es cuando se elimina el componente,
    //corre  solo cuando  damos  elminar  el componente  el componente deja  de existi
    console.log('ngOnDestroy');
  }



  imgError (){
    this.img =  this.imageDefault;

  }
  imgLoaded( ){
    console.log("Log hijo");
    this.loaded.emit(this.img); // a le estamos pasando
    // la URL del hijo
  }
}
