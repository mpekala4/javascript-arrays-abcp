var chocolateBars = ['snikers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  return ["foo",...array]
  addElementToBeginningOfArray()
};

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("foo");
  return array
};

function addElementToEndOfArray(array, element){
  return [...array,"foo"];
  addElementToEndOfArray()
};

function destructivelyAddElementToEndOfArray(array, element){
array.push("foo");
return array
}
