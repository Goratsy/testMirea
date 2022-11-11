import { Component } from '@angular/core';
import { isSignin } from './components/login/login.component';



export interface IallPosts {
  id: number,
  title: string,
  description: string,
  img: string
}

export const allPosts: IallPosts[] = [
  {
    id: 1,
    title: 'Яблоко',
    description: 'Яблоко - фрукт. Оно очень полезное!',
    img: 'https://rg.ru/uploads/images/199/33/68/iStock-1158470655.jpg'
  },
  {
    id: 2,
    title: 'Машина',
    description: 'Машина - средство передвижения, которое обеспечивает быстрое перемещение по городу.',
    img: 'https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2020/09/07/14/4099186/52d8f45d1ae944564ab28538f5a79af4894c5106.jpg'
  },
  {
    id: 3,
    title: 'Пирог',
    description: 'Пирог от мамы это хорошо, а пирог от бабушки это божественно.',
    img: 'https://img.delo-vcusa.ru/2019/09/pesochniy-pirog-s-yablokami.jpg'
  },
  {
    id: 3,
    title: 'Пирог',
    description: 'Пирог от мамы это хорошо, а пирог от бабушки это божественно.',
    img: 'https://img.delo-vcusa.ru/2019/09/pesochniy-pirog-s-yablokami.jpg'
  },
  {
    id: 3,
    title: 'Пирог',
    description: 'Пирог от мамы это хорошо, а пирог от бабушки это божественно.',
    img: 'https://img.delo-vcusa.ru/2019/09/pesochniy-pirog-s-yablokami.jpg'
  }
]
let a: boolean = isSignin;
console.log(isSignin)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-mirea';
  isAuth = true

  allPosts: IallPosts[] = allPosts;
}
