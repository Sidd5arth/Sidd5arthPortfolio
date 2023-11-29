function countBy(array, iteratee) {
    let obj = {};
    for(let i = 0; i < array.length; i++){
      const tobe = array[i]
      const val = iteratee(tobe)
      console.log(val)
      if(obj.hasOwnProperty(val)){
        obj[val] += 1;
      }else{
        obj[val] = 1;
      }
    }
    return obj
  }

  console.log(countBy([6.1, 4.2, 6.3], Math.floor))