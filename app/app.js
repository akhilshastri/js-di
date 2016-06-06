/**
 * Created by Akhil on 06-06-2016.
 */
import {register,inject} from './container';

@register({name: "akhil"})
class Hello {
    sayHello() {
        console.log('hello')
    }
}

@inject()
@register({name: "shastri"})
class World {
    sayWorld() {
        console.log('world')
    }
}

// let hello = new Hello();
//
// console.log(hello);
//
//
// function dec(id){
//     console.log('evaluated', id);
//     return (target, property, descriptor) => console.log('executed', id);
// }
//
// class Example {
//     @dec(1)
//     @dec(2)
//     method(){}
// }