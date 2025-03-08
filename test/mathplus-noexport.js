class MathPlus {
  integral(f_int, a_int, b_int, n_int) {
    n_int = n_int || 500;
    if (function () {
      var res_int = true;
      const varObject_int = [
        {'value': f_int, 'needed': 'function'},
        {'value': a_int, 'needed': 'number'},
        {'value': b_int, 'needed': 'number'},
        {'value': n_int, 'needed': 'number'},
      ];
      for (i_int of varObject_int) {
        res_int = res_int && typeof (i_int.value) == i_int.needed;
      };
      return res_int;
    }()) {
      var value_int = 0;
      for (let k_int = 0; k_int <= n_int; k_int += 1) {
        value_int += f_int(a_int + (b_int - a_int) / n_int * k_int) * ((b_int - a_int) / n_int);
      };
      return value_int;
    } else {
      throw 'TypeError: It is not an expression';
    };
  };
  derivative(f_d, a_d, dx_d) {
    dx_d = dx_d || 9e-8;
    if (function () {
      var res_d = true;
      const varObject_d = [
        {'value': f_d, 'needed': 'function'},
        {'value': a_d, 'needed': 'number'},
        {'value': dx_d, 'needed': 'number'}
      ];
      for (let i_d of varObject_d) {
        res_d = res_d && typeof i_d.value == i_d.needed;
      };
      return res_d;
    }()) {
      return (f_d(a_d + dx_d) - f_d(a_d)) / dx_d;
    } else {
      throw 'TypeError: It is not an expression';
    };
  };
  sumf(f_sum, a_sum, b_sum) {
    if (function () {
      var res_sum = true;
      const varObject_sum = [
        {'value': f_sum, 'needed': 'function'},
        {'value': a_sum, 'needed': 'number'},
        {'value': b_sum, 'needed': 'number'}
      ];
      for (i_sum of varObject_sum) {
        res_sum = res_sum && typeof (i_sum.value) == i_sum.needed;
      };
      return res_sum;
    }()) {
      var value_sum = 0;
      for (let k_sum = a_sum; k_sum <= b_sum; k_sum += 1) {
        value_sum += f_sum(k_sum)
      };
      return value_sum;
    } else {
      throw 'TypeError: It is not an expression';
    };
  };
  prodf(f_prod, a_prod, b_prod) {
    if (function () {
      var res_prod = true;
      const varObject_prod = [
        {'value': f_prod, 'needed': 'function'},
        {'value': a_prod, 'needed': 'number'},
        {'value': b_prod, 'needed': 'number'}
      ];
      for (i_prod of varObject_prod) {
        res_prod = res_prod && typeof (i_prod.value) == i_prod.needed;
      };
      return res_prod;
    }()) {
      var value_prod = 1;
      for (let k_prod = a_prod; k_prod <= b_prod; k_prod += 1) {
        value_prod *= f_prod(k_prod)
      };
      return value_prod;
    } else {
      throw 'TypeError: It is not an expression';
    };
  };
  trig(trigf_trig, angle_trig) {
    trigf_trig.hyp = trigf_trig.hyp || false;
    if (function () {
      var res_trig = true;
      const varObject_trig = [
        {'value': trigf_trig, 'needed': 'object'},
        {'value': angle_trig, 'needed': 'number'}
      ];
      for (let i_trig of varObject_trig) {
        res_trig = res_trig && typeof i.value == i.needed;
      };
      return res_trig;
    }()) {
      switch (trigf_trig.trig) {
        case 'sec':
          return 1 / Math[trigf_trig.hyp ? 'cosh' : 'cos'](angle_trig);
        case 'csc':
          return 1 / Math[trigf_trig.hyp ? 'sinh' : 'sin'](angle_trig);
        case 'cot':
          return 1 / Math[trigf_trig.hyp ? 'tanh' : 'tan'](angle_trig);
        case 'asec':
          return Math[trigf_trig.hyp ? 'acosh' : 'acos'](1 / angle_trig);
        case 'acsc':
          return Math[trigf_trig.hyp ? 'asinh' : 'asin'](1 / angle_trig);
        case 'acot':
          return Math[trigf_trig.hyp ? 'atanh' : 'tan'](1 / angle_trig);
      };
    } else {
      throw 'TypeError: It is not an expression';
    };
  };
  nth_root(value_nth_root, n_nth_root) {
    n_nth_root = n_nth_root || 2;
    if (function () {
      var res_nth_root = true;
      for (let i_nth_root of [value_nth_root, n_nth_root]) {
        res_nth_root = res_nth_root && typeof i_nth_root == 'number';
      };
      return res_nth_root;
    }()) {
      return Math.pow(value_nth_root, 1 / n_nth_root);
    } else {
      throw 'TypeError: It is not an expression';
    };
  };
  log_base(a_log_base, b_log_base) {
    if (function () {
      var res_log_base = true;
      for (let i_log_base of [a_log_base, b_log_base]) {
        res_log_base = res_log_base && typeof i_log_base == 'number';
      };
      return res_log_base;
    }()) {
      return Math.log(b_log_base)/Math.log(a_log_base)
    } else {
      throw 'TypeError: It is not an expression';
    };
  };
  phi = (1 + Math.sqrt(5)) / 2;
  solve(lhs_solve, rhs_solve, x_solve, n_solve, dx_solve) {
    n_solve = n_solve || 500;
    x_solve = x_solve || 0.5;
    dx_solve = dx_solve || 9e-8;
    if (function () {
      var result_solve = true;
      const judgeObject_solve = [
        {"value": lhs_solve, "needed": "function"},
        {"value": rhs_solve, "needed": "function"},
        {"value": x_solve, "needed": "number"},
        {"value": n_solve, "needed": "number"},
        {"value": dx_solve, "needed": "number"}
      ];
      for (index_solve of judgeObject_solve) {
        result_solve = result_solve && typeof (index_solve.value) == index_solve.needed;
      };
      return result_solve;
    }()) {
      for (let k_solve = 0; k_solve < n_solve; k_solve++) {
        x_solve -= (lhs_solve(x_solve) - rhs_solve(x_solve)) / (((lhs_solve(x_solve + dx_solve) - lhs_solve(x_solve)) - (rhs_solve(x_solve + dx_solve) - rhs_solve(x_solve))) / dx_solve);
      };
      return x_solve;
    } else {
      throw new TypeError('It is not an expression');
    };
  };
  limit(f_limit, x_limit, dx_limit) {
    dx_limit = dx_limit || 9e-8;
    if (function () {
      var result_limit = true;
      const judgeObject_limit = [
        {"value": f_limit, "needed": "function"},
        {"value": x_limit, "needed": "number"},
        {"value": dx_limit, "needed": "number"}
      ];
      for (index_limit of judgeObject_limit) {
        result_limit = result_limit && typeof (index_limit.value) == index_limit.needed;
      };
      return result_limit;
    }()) {
      var limresult_limit = f_limit(x_limit);
      if (isNaN(limresult_limit) || limresult_limit == Infinity || limresult_limit == -Infinity) {
        limresult_limit = (f_limit(x_limit + dx_limit) + f_limit(x_limit - dx_limit)) / 2;
      }
      return limresult_limit;
    } else {
      throw new TypeError('It is not an expression');
    };
  };
};
