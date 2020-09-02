// add solution here

function theBeatlesPlay (array1, array2){
  let newArray = [];
  
  for (let i = 0; i < array1.length; i++){
      let musican = array1[i];
      let instrument = array2[i];
      newArray.push(musican + ' plays ' + instrument);
  }
  
  return newArray;
}

function johnLennonFacts (array){
  let newArray = [];
  
  while (newArray.length < array.length){
        let fact = array[i];
        let fixFact = fact + "!!!";
        newArray.push(fixFact);
  }
  
  return newArray;
}

function iLoveTheBeatles (num){
  let newArray = [];
  
  
}