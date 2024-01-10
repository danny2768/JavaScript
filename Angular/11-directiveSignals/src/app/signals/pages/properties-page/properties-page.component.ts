import { Component, OnDestroy, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnDestroy{

  public counter = signal(10);

  public user = signal<User>({
    id:         1,
    email:      'test@test.com',
    first_name: 'test',
    last_name:  'testing',
    avatar:     'https://avatars.githubusercontent.com/u/82215769?v=4',
  });

  public fullName = computed( () =>  `${this.user().first_name} ${this.user().last_name}`)

  //@ Los efectos se limpian automaticamente
  public userChangedEffect = effect( () => {
    console.log( `${this.user().first_name}  - ${this.counter()}` );
  })

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  increaseBy( value: number ) {
    this.counter.update( current => current + value );
  };


  //! Este metodo es potencialmente peligroso ya que si se pasa como argumento
  //! Un campo que no existe este se creará
  //@ Se debe usar field: 'keyof User', donde User es la inferfaz
  // onFieldUpdated( field: string, value: string ){
  //   this.user.set(
  //     //* Se crea un objeto
  //     {
  //       //* Se copia el objeto user
  //       ...this.user(),
  //       //* Se reemplaza el valor del campo por el recibido
  //       [field]: value,
  //     }
  //   )
  // }

  onFieldUpdated( field: keyof User, value: string ){
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    // this.user.update( current => ({
    //   ...current,
    //   [field]: value,
    // }))

    this.user.update( current => {
      switch( field ) {
        case 'email':
          current.email = value;
          break;

        case 'avatar':
          current.avatar = value;
          break;

        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;

        case 'id':
          current.id = Number(value);
          break;
      }
      return current;
    })
  }
}
