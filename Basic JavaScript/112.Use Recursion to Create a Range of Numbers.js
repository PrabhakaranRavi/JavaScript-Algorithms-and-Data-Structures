function rangeOfNumbers(startNum, endNum) {
    if ( startNum === endNum){
      return [startNum]
    }
    let constArray = rangeOfNumbers(startNum + 1, endNum)
    constArray.unshift(startNum);
    return constArray;
  };


  