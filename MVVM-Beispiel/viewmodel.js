// Model
var model = {};
model.person = {};
model.person.name = '';

// ViewModel
var myName = document.querySelector('#myName');
var nameOutput = document.querySelector('#nameOut');
myName.addEventListener('input', function(){
  model.person.name = myName.value;
  // Aktueller Wert im Model wird ausgegeben
  if (model.person.name !== '') {
    nameOutput.innerHTML = 'Hi, my name is: ' + model.person.name + '!';
  } else {
    nameOutput.innerHTML = '';
  }
});

