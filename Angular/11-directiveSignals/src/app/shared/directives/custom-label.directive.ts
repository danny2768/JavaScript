import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;


  @Input() set color ( value: string ) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors ( value: ValidationErrors | null | undefined ) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor( private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    // console.log('Directiva - NgOnInit');
  }


  setStyle( color?: string): void {
    if ( !this.htmlElement ) return;

    if ( color ) {
      this.htmlElement!.nativeElement.style.color = color;
    } else {
      this.htmlElement!.nativeElement.style.color = this._color;
    }
  }

  setErrorMessage(): void {
    if ( !this.htmlElement ) return;

    if ( !this._errors ) {
      this.htmlElement.nativeElement.innerText = 'No hay errores';
      this.setStyle('green');
      return;
    }

    const errors = Object.keys(this._errors);

    if ( errors.includes('required') ) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      this.setStyle('red');
      return;
    }

    if ( errors.includes('minlength') ) {
      const min  = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

      // @ Destructuring also works* :)
      const {requiredLength, actualLength} = this._errors['minlength']
      console.log(requiredLength,actualLength);
      // @ If I want to give it a diff names to the vars I'm destructuring I'll need to do this:
      // const {requiredLength: min, actualLength: current} = this._errors['minlength']


      this.htmlElement.nativeElement.innerText = `Minimo ${current}/${min} caracteres.`;
      this.setStyle('red');
      return;
    }

    if ( errors.includes('email') ) {
      this.htmlElement.nativeElement.innerText = 'Este campo debe ser un email';
      this.setStyle('red');
      return;
    }
  }
}
