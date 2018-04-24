function bumpCounter(){
  var counter = 0;

  function addBump(){
    counter +=1
  }

  function getBumps(){
    return counter
  }
}

function createAnimal(animalType){
  function animalCreated(deadlyDevice){
    return {
      animalType: animalType
      deadlyDevice: deadlyDevice
    }
  }
}

var sharkCreator = createAnimal('Shark')
//var sharkWithFrickinLaserbeam = createAnimal(Sh)
