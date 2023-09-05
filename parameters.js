const paramFunc = (param1, param2) => {
    return param1 + ' ' + param2;
}


const paramHelloFunc = (world, hello) => {
    return world + ' ' + hello;
}

console.log(paramFunc('Hello', 'World'));

console.log(paramHelloFunc('Hello', 'World'));

const paramFunc3 = (param1='', param2='Your', param3) => {
    return `${param1} ${param2} ${param3}`;
}

console.log(paramFunc3('Hello', undefined, 'World'));