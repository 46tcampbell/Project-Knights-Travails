export function knightMoveSubXAddY(queue, dequeuedArray, xValue, yValue) {
  /* This if statement check is important as the first time an array is added is different codes then subsequent passes
   so the same sub/add code is listed twice below. There may be a more efficient way, but I can't think of how to pull 
   it out since I can't pass operators as an argument
    */
  if (!dequeuedArray.some((el) => Array.isArray(el))) {
    const newArray = [
      dequeuedArray,
      [dequeuedArray[0] - xValue, dequeuedArray[1] + yValue],
    ];
    if (
      newArray[newArray.length - 1][0] >= 0 &&
      newArray[newArray.length - 1][0] <= 7 &&
      newArray[newArray.length - 1][1] >= 0 &&
      newArray[newArray.length - 1][1] <= 7
    ) {
      queue.enqueue(newArray);
    }
  } else {
    const newArray = [
      ...dequeuedArray,
      [
        dequeuedArray[dequeuedArray.length - 1][0] - xValue,
        dequeuedArray[dequeuedArray.length - 1][1] + yValue,
      ],
    ];
    if (
      newArray[newArray.length - 1][0] >= 0 &&
      newArray[newArray.length - 1][0] <= 7 &&
      newArray[newArray.length - 1][1] >= 0 &&
      newArray[newArray.length - 1][1] <= 7
    ) {
      queue.enqueue(newArray);
    }
  }
}

export function knightMoveAddXAddY(queue, dequeuedArray, xValue, yValue) {
  /* This if statement check is important as the first time an array is added is different codes then subsequent passes
   so the same sub/add code is listed twice below. There may be a more efficient way, but I can't think of how to pull 
   it out since I can't pass operators as an argument
    */
  if (!dequeuedArray.some((el) => Array.isArray(el))) {
    const newArray = [
      dequeuedArray,
      [dequeuedArray[0] + xValue, dequeuedArray[1] + yValue],
    ];
    if (
      newArray[newArray.length - 1][0] >= 0 &&
      newArray[newArray.length - 1][0] <= 7 &&
      newArray[newArray.length - 1][1] >= 0 &&
      newArray[newArray.length - 1][1] <= 7
    ) {
      queue.enqueue(newArray);
    }
  } else {
    const newArray = [
      ...dequeuedArray,
      [
        dequeuedArray[dequeuedArray.length - 1][0] + xValue,
        dequeuedArray[dequeuedArray.length - 1][1] + yValue,
      ],
    ];
    if (
      newArray[newArray.length - 1][0] >= 0 &&
      newArray[newArray.length - 1][0] <= 7 &&
      newArray[newArray.length - 1][1] >= 0 &&
      newArray[newArray.length - 1][1] <= 7
    ) {
      queue.enqueue(newArray);
    }
  }
}

export function knightMoveSubXSubY(queue, dequeuedArray, xValue, yValue) {
  /* This if statement check is important as the first time an array is added is different codes then subsequent passes
   so the same sub/add code is listed twice below. There may be a more efficient way, but I can't think of how to pull 
   it out since I can't pass operators as an argument
    */
  if (!dequeuedArray.some((el) => Array.isArray(el))) {
    const newArray = [
      dequeuedArray,
      [dequeuedArray[0] - xValue, dequeuedArray[1] - yValue],
    ];
    if (
      newArray[newArray.length - 1][0] >= 0 &&
      newArray[newArray.length - 1][0] <= 7 &&
      newArray[newArray.length - 1][1] >= 0 &&
      newArray[newArray.length - 1][1] <= 7
    ) {
      queue.enqueue(newArray);
    }
  } else {
    const newArray = [
      ...dequeuedArray,
      [
        dequeuedArray[dequeuedArray.length - 1][0] - xValue,
        dequeuedArray[dequeuedArray.length - 1][1] - yValue,
      ],
    ];
    if (
      newArray[newArray.length - 1][0] >= 0 &&
      newArray[newArray.length - 1][0] <= 7 &&
      newArray[newArray.length - 1][1] >= 0 &&
      newArray[newArray.length - 1][1] <= 7
    ) {
      queue.enqueue(newArray);
    }
  }
}

export function knightMoveAddXSubY(queue, dequeuedArray, xValue, yValue) {
  /* This if statement check is important as the first time an array is added is different codes then subsequent passes
   so the same sub/add code is listed twice below. There may be a more efficient way, but I can't think of how to pull 
   it out since I can't pass operators as an argument
    */
  if (!dequeuedArray.some((el) => Array.isArray(el))) {
    const newArray = [
      dequeuedArray,
      [dequeuedArray[0] + xValue, dequeuedArray[1] - yValue],
    ];
    if (
      newArray[newArray.length - 1][0] >= 0 &&
      newArray[newArray.length - 1][0] <= 7 &&
      newArray[newArray.length - 1][1] >= 0 &&
      newArray[newArray.length - 1][1] <= 7
    ) {
      queue.enqueue(newArray);
    }
  } else {
    const newArray = [
      ...dequeuedArray,
      [
        dequeuedArray[dequeuedArray.length - 1][0] + xValue,
        dequeuedArray[dequeuedArray.length - 1][1] - yValue,
      ],
    ];
    if (
      newArray[newArray.length - 1][0] >= 0 &&
      newArray[newArray.length - 1][0] <= 7 &&
      newArray[newArray.length - 1][1] >= 0 &&
      newArray[newArray.length - 1][1] <= 7
    ) {
      queue.enqueue(newArray);
    }
  }
}
