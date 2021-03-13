
exports.min = function min(array) {

  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    let res = array[0];
    array.forEach(function (item, i, array) {
      if (res > array[i]) {
        res = array[i];
      }
    });
    return res;
  }

}

exports.max = function max(array) {

  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    let res = array[0];
    array.forEach(function (item, i, array) {
      if (res < array[i]) {
        res = array[i];
      }
    });
    return res;
  }
}

exports.avg = function avg(array) {

  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    let res = 0;
    array.forEach(function (item, i, array) {

      res += array[i];

    });
    return res / array.length;
  }
}
