/**
 * Created by Akhil on 06-06-2016.
 */
let registory = new Map();
export function register (config) {
    return function decorator(target,prop, descriptor) {
        debugger;
        registory.set(config.name || target.name , { definition: target })
    }
}

export function factory (config) {
    return function decorator(target,prop, descriptor) {
        debugger;
        registory.set(config.name || target.name , { definition: target })
    }
}

export function service (config) {
    return function decorator(target,prop, descriptor) {
        debugger;
        registory.set(config.name || target.name , { definition: target })
    }
}

export function inject(config){
    return function decorator ( target, prop, descriptor) {
        debugger;
    }
}