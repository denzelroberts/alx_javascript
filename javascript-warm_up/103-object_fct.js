const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);

  function incr(increase){
    return myObject.value ++;
  }

  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);