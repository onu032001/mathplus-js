function integral(f, a, b, n) {
  n = n || 500;
  if (function () {
    var res = true;
    const varObject = [
      {'value': f, 'needed': 'function'},
      {'value': a, 'needed': 'number'},
      {'value': b, 'needed': 'number'},
      {'value': n, 'needed': 'number'},
    ];
    for (i of varObject) {
      res = res && typeof (i.value) == i.needed;
    };
    return res;
  }()) {
    n = n || 500;
    var value = 0;
    for (let k = 0; k <= n, k += 1) {
      value += f(a + (b - a) / n * k) * ((b - a) / n);
    };
    return value;
  } else {
    throw 'TypeError: It is not an expression';
  };
};
function derivative(f, a, dx) {
  dx = dx || 9e-8;
  if (function () {
    var res = true;
    const varObject = [
      {'value': f, 'needed': 'function'},
      {'value': a, 'needed': 'number'},
      {'value': dx, 'needed': 'number'}
    ];
    for (let i of varObject) {
      res = res && typeof i.value == i.needed;
    };
    return res;
  }()) {
    return (f(a + dx) - f(a)) / dx;
  } else {
    throw 'TypeError: It is not an expression';
  }
};
function trig(trigf, angle) {
  trigf.hyp = trigf.hyp || false;
  if (function () {
    var res = true;
    const varObject = [
      {'value': trigf, 'needed': 'object'},
      {'value': angle, 'needed': 'number'}
    ];
    for (let i of varObject) {
      res = res && typeof i.value == i.needed;
    };
    return res;
  }()) {
    switch (trigf.trig) {
      case 'sec':
        return 1 / Math[trigf.hyp ? 'cosh' : 'cos'](angle);
      case 'csc':
        return 1 / Math[trigf.hyp ? 'sinh' : 'sin'](angle);
      case 'cot':
        return 1 / Math[trigf.hyp ? 'tanh' : 'tan'](angle);
      case 'asec':
        return Math[trigf.hyp ? 'acosh' : 'acos'](1 / angle);
      case 'acsc':
        return Math[trigf.hyp ? 'asinh' : 'asin'](1 / angle);
      case 'acot':
        return Math[trigf.hyp ? 'atanh' : 'tan'](1 / angle);
    };
  } else {
    throw 'TypeError: It is not an expression';
  }
};
function nth_root(value, n) {
  if (function () {
    var res = true;
    for (let i of [value, n]) {
      res = res && typeof i == 'number';
    };
    return res;
  }()) {
    return Math.pow(value, 1 / n);
  } else {
    throw 'TypeError: It is not an expression';
  }
};
