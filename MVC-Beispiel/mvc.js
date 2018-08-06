// Neues Modell erstellen
var model = {};
// Daten zuweisen
model.data = {};
model.data.id = 1;
model.data.name = "Tom";
model.data.age = 25;

// View-Objekt anlegen
var view = {};
// Funktionalität hinzufügen
// Das Modell wird als Parameter übertragen
view.show = function(model) {
  document.write('Hi, I am ' + model.data.name + ', ' + model.data.age + ' years old.');
}

// Controller-Objekt erstellen
var controller = {};
// Funktionalität zuweisen
// Das View dient als Parameter
controller.execute = function() {
  view.show(model);
}

// Controller ausführen
controller.execute();
