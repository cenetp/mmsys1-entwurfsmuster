// Funktionsbasierte Defintion eines Objektes
function Person() {
  this.name = function () { return 'Marta'; };
  this.surname = function () { return 'Martinez'; };
}

// Decorator
function Marrying(person, additionalName){
  var surname = person.surname();
  person.surname = function(){
    return  surname + '-' + additionalName;
  };
}

// Objekt verwenden und "dekorieren"
var marta = new Person();
Marrying(marta, 'Lopez');

console.log(marta.surname());
