// Создать функцию, которая принимает объект, меняет местами ключ и значение и возвращает новый объект. {name: 'mykola', age: 56} -> {mykola: 'name', 56: 'age'}

obj = {
    name: 'mykola',
    age: 33
}

function f(obj) {

    for (var key in obj) {
        var pass = obj.key; 
        var log = key;
        obj[key] = log;

    }
    return obj;lfkvfkl
}
gfbgb
console.log(f(obj));c cx 


