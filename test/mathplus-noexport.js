var MathPlus = class MathPlus {
  expressionError() {
    throw new TypeError('It is not an expression')
  }
  factorial(value_fact) {
    if (typeof value_fact == 'number') {
      if (value_fact == 0) {
        return 1;
      } else if (value_fact - value_fact % 1 == value_fact && value_fact > 0) {
        return value_fact * this.factorial(value_fact - 1);
      } else {
        this.expressionError();
      }
    } else {
      this.expressionError();
    }
  }
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
      for (let i_int of varObject_int) {
        res_int = res_int && typeof (i_int.value) == i_int.needed;
      };
      return res_int;
    }()) {
      if (n_int > 0) {
        var value_int = 0;
        for (let k_int = 0; k_int <= n_int; k_int += 1) {
          value_int += f_int(a_int + (b_int - a_int) / n_int * k_int) * ((b_int - a_int) / n_int);
        };
        return value_int;
      } else {
        this.expressionError();
      }
    } else {
      this.expressionError();
    };
  };
  derivative(f_d, a_d, dx_d) {
    dx_d = dx_d || 1e-6;
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
      this.expressionError();
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
      for (let i_sum of varObject_sum) {
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
      this.expressionError();
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
      for (let i_prod of varObject_prod) {
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
      this.expressionError();
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
        res_trig = res_trig && typeof i_trig.value == i_trig.needed;
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
      this.expressionError();
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
      this.expressionError();
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
      this.expressionError();
    };
  };
  phi = (1 + Math.sqrt(5)) / 2;
  solve(lhs_solve, rhs_solve, x_solve, n_solve, dx_solve) {
    n_solve = n_solve || 500;
    x_solve = x_solve || 0.5;
    dx_solve = dx_solve || 1e-6;
    if (function () {
      var result_solve = true;
      const judgeObject_solve = [
        {"value": lhs_solve, "needed": "function"},
        {"value": rhs_solve, "needed": "function"},
        {"value": x_solve, "needed": "number"},
        {"value": n_solve, "needed": "number"},
        {"value": dx_solve, "needed": "number"}
      ];
      for (let index_solve of judgeObject_solve) {
        result_solve = result_solve && typeof (index_solve.value) == index_solve.needed;
      };
      return result_solve;
    }()) {
      function lr_solve(value_lr) {
        return lhs_solve(value_lr) - rhs_solve(value_lr);
      }
      function small_f_solve(small_solve, value_solve) {
        return (lr_solve(value_solve + small_solve) - lr_solve(value_solve)) / small_solve;
      }
      for (let k_solve = 0; k_solve < n_solve; k_solve++) {
        x_solve -= (lhs_solve(x_solve) - rhs_solve(x_solve)) / (small_f_solve(dx_solve, x_solve));
      };
      return x_solve;
    } else {
      this.expressionError();
    };
  };
  taylor(expr_taylor, value_taylor, initial_taylor, max_index_taylor, dx_taylor) {
    initial_taylor = initial_taylor || 0;
    max_index_taylor = max_index_taylor || 5;
    dx_taylor = dx_taylor || 1e-6 * Math.pow(10, max_index_taylor);
    if (function () {
      var result_taylor = true;
      const judgeObject_taylor = [
        {"value": expr_taylor, "needed": "function"},
        {"value": value_taylor, "needed": "number"},
        {"value": initial_taylor, "needed": "number"},
        {"value": max_index_taylor, "needed": "number"},
        {"value": dx_taylor, "needed": "number"}
      ];
      for (let index_taylor of judgeObject_taylor) {
        result_taylor = result_taylor && typeof (index_taylor.value) == index_taylor.needed;
      };
      return result_taylor;
    }()) {
        var current_taylor = expr_taylor,
        resultf_taylor = [];
      function fd_taylor(f_taylor) {
        return (param_taylor) => (f_taylor(param_taylor + dx_taylor) - f_taylor(param_taylor - dx_taylor)) / (2 * dx_taylor);
      }
      for(let index1_taylor = 0; index1_taylor <= max_index_taylor; index1_taylor++) {
        resultf_taylor.push(current_taylor(initial_taylor) / this.factorial(index1_taylor));
        current_taylor = fd_taylor(current_taylor);
      }
      return resultf_taylor.reduce((before_taylor, after_taylor, i_taylor) => before_taylor + after_taylor * Math.pow(value_taylor - initial_taylor, i_taylor));
    } else {
      this.expressionError();
    }
  }
  limit(f_limit, x_limit, dx_limit) {
    dx_limit = dx_limit || 1e-6;
    if (function () {
      var result_limit = true;
      const judgeObject_limit = [
        {"value": f_limit, "needed": "function"},
        {"value": x_limit, "needed": "number"},
        {"value": dx_limit, "needed": "number"}
      ];
      for (let index_limit of judgeObject_limit) {
        result_limit = result_limit && typeof (index_limit.value) == index_limit.needed;
      };
      return result_limit;
    }()) {
      var limresult_limit = f_limit(x_limit);
      if (isNaN(limresult_limit) || limresult_limit == Infinity || limresult_limit == -Infinity) {
        limresult_limit = (
          this.taylor(f_limit, x_limit, x_limit + dx_limit, 10) +
          this.taylor(f_limit, x_limit, x_limit - dx_limit, 10)
        ) / 2;
      }
      return limresult_limit;
    } else {
      this.expressionError();
    };
  };
};
var MP = new MathPlus();
