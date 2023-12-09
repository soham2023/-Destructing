function swap(a, b) {
    [a, b] = [b, a];
    return [a, b];
  }
  
  let x = 4;
  let y = 5;
  [x, y] = swap(x, y);
  console.log(x, y);