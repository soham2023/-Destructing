function maxMin(arr) {
    return {
      max: Math.max(...arr),
      min: Math.min(...arr),
    };
  }
  
  const array = [3, 7, 2, 10, 4, 2];
  console.log(maxMin(array));