import math

class MathPlus:
    def __init__(self):
        pass
    
    def expressionError():
        raise TypeError('It is not an expression')

    def factorial(self, value_fact):
        if type(value_fact) == int:
            if value_fact == 0:
                return 1
            elif value_fact - value_fact % 1 == value_fact and value_fact > 0:
                return value_fact * self.factorial(value_fact - 1)
        else:
            self.expressionError()
    
    def integral(self, f_int, a_int, b_int, n_int = 500):

        def temp_MathPlus():
            function = type(lambda: None)
            res_int = True
            varObject_int = [
                {'value': f_int, 'needed': [function]},
                {'value': a_int, 'needed': [int, float]},
                {'value': b_int, 'needed': [int, float]},
                {'value': n_int, 'needed': [int]}
            ]
            for i_int in varObject_int:
                res_int = res_int and type(i_int['value']) in i_int['needed']
            return res_int
        if temp_MathPlus():
            if n_int > 0:
                value_int = 0
                for k_int in range(n_int + 1):
                    value_int += f_int(a_int + (b_int - a_int) / n_int * k_int) * ((b_int - a_int) / n_int)
                return math.floor(value_int * n_int) / n_int
            else:
                self.expressionError()
        else:
            self.expressionError()
    
    def derivative(self, f_d, a_d, dx_d = 1e-6):
        def temp_MathPlus():
            function = type(lambda: None)
            res_d = True
            varObject_d = [
                {'value': f_d, 'needed': [function]},
                {'value': a_d, 'needed': [int, float]},
                {'value': dx_d, 'needed': [int, float]}
            ]
            for i_d in varObject_d:
                res_d = res_d and type(i_d['value']) in i_d['needed']
            return res_d
        if temp_MathPlus():
            return (f_d(a_d + dx_d) - f_d(a_d)) / dx_d
        else:
            self.expressionError
    
    def prodf(self, f_prod, a_prod, b_prod):
        def temp_MathPlus():
            function = type(lambda: None)
            res_prod = True
            varObject_prod = [
                {'value': f_prod, 'needed': [function]},
                {'value': a_prod, 'needed': [int]},
                {'value': b_prod, 'needed': [int]}
            ]
            for i_prod in varObject_prod:
                res_prod = res_prod and type(i_prod['value']) in i_prod['needed']
            return res_prod and a_prod <= b_prod
        if temp_MathPlus():
            value_prod = 0
            for k_prod in range(a_prod, b_prod + 1):
                value_prod += f_prod(k_prod)
            return value_prod
        else:
            this.expressionError()
    
    def prodf(self, f_prod, a_prod, b_prod):
        def temp_MathPlus():
            function = type(lambda: None)
            res_prod = True
            varObject_prod = [
                {'value': f_prod, 'needed': [function]},
                {'value': a_prod, 'needed': [int]},
                {'value': b_prod, 'needed': [int]}
            ]
            for i_prod in varObject_prod:
                res_prod = res_prod and type(i_prod['value']) in i_prod['needed']
            return res_prod and a_prod <= b_prod
        if temp_MathPlus():
            value_prod = 0
            for k_prod in range(a_prod, b_prod + 1):
                value_prod *= f_prod(k_prod)
            return value_prod
        else:
            this.expressionError()
    
    def trig(self, trigf_trig, angle_trig):
        import math
        try:
            trigf_trig['hyp']
        except:
            trigf_trig['hyp'] = False
        def temp_MathPlus():
            res_trig = True
            varObject_trig = [
                {'value': trigf_trig, 'needed': [dict]},
                {'value': angle_trig, 'needed': [int, float]}
            ]
            for i_trig in varObject_trig:
                res_trig = res_trig and type(i_trig['value']) in i_trig['needed']
            return res_trig
        def temp2_MathPlus(withHyp_trig, withoutHyp_trig):
            if trigf_trig['hyp']:
                return eval(f'math.{withHyp_trig}')
            else:
                return eval(f'math.{withoutHyp_trig}')
        if temp_MathPlus():
            match trigf_trig['trig']:
                case 'sec':
                    return 1 / temp2_MathPlus('cosh', 'cos')(angle_trig)
                case 'csc':
                    return 1 / temp2_MathPlus('sinh', 'sin')(angle_trig)
                case 'cot':
                    return 1 / temp2_MathPlus('coth', 'cot')(angle_trig)
                case 'asrc':
                    return temp2_MathPlus('acosh', 'acos')(1 / angle_trig)
                case 'acsc':
                    return temp2_MathPlus('asinh', 'asin')(1 / angle_trig)
                case 'acot':
                    return temp2_MathPlus('acoth', 'acot')(1 / angle_trig)
    
    def nth_root(self, value_nth_root, n_nth_root = 2):
        def temp_MathPlus():
            res_nth_root = True
            for i_nth_root in [value_nth_root, n_nth_root]:
                res_nth_root = res_nth_root and type(i_nth_root) in [int, float]
            return res_nth_root
        if temp_MathPlus():
            return value_nath_root ** (1 / n_nth_root)
        else:
            this.expressionError()
    
    def log_base(a_log_base, b_log_base):
        def temp_MathPlus():
            res_log_base = True
            for i_log_base in [a_log_base, b_log_base]:
                res_log_base = res_log_base and type(i_log_base) in [int, float]
            return res_log_base
        if temp_MathPlus():
            return math.log(b_log_base)/math.log(a_log_base)
        else:
            this.expressionError()
    
    phi = (1 + math.sqrt(5)) / 2

    def solve(self, lhs_solve, rhs_solve, x_solve = 0.5, n_solve = 500, dx_solve = 1e-6):
        def temp_MathPlus():
            function = type(lambda: None)
            result_solve = True
            judgeObject_solve = [
                {"value": lhs_solve, "needed": [function]},
                {"value": rhs_solve, "needed": [function]},
                {"value": x_solve, "needed": [int, float]},
                {"value": n_solve, "needed": [int]},
                {"value": dx_solve, "needed": [int, float]}
            ]
            for index_solve in judgeObject_solve:
                result_solve = result_solve and type(index_solve['value']) in index_solve['needed']
            return result_solve
        if temp_MathPlus:
            def lr_solve(value_lr):
                return lhs_solve(value_lr) - rhs_solve(value_lr)
            def small_f_solve(small_solve, value_solve):
                return (lr_solve(value_solve + small_solve) - lr_solve(value_solve)) / small_solve
            for k in range(n_solve):
                x_solve -= (lhs_solve(x_solve)- rhs_solve(x_solve)) / (small_f_solve(dx_solve, x_solve))
            return x_solve
        else:
            this.expressionError()
    
    def taylor(self, expr_taylor, value_taylor, initial_taylor, max_index_taylor, dx_taylor):
        if initial_taylor == None:
            initial_taylor = 0
        if max_index_taylor == None:
            max_index_taylor = 5
        if dx_taylor == None:
            dx_taylor = 1e-6 * 10 ** max_index_taylor
        
        def reduce(array_reduce, function_reduce):
            if len(array_reduce) > 0:
                result_reduce = array_reduce[0]
                if len(array_reduce) > 1:
                    for index_reduce in range(1, len(array_reduce)):
                        result_reduce = function_reduce(result_reduce, array_reduce[index_reduce], index_reduce)
                return result_reduce
            else:
                return None

        def temp_MathPlus():
            function = type(lambda: None)
            result_taylor = True
            judgeObject_taylor = [
                {"value": expr_taylor, "needed": [function]},
                {"value": value_taylor, "needed": [int, float]},
                {"value": initial_taylor, "needed": [int, float]},
                {"value": max_index_taylor, "needed": [int]},
                {"value": dx_taylor, "needed": [int, float]}
            ]
            for index_taylor in judgeObject_taylor:
                result_taylor = result_taylor and type(index_taylor['value']) in index_taylor['needed']
            return result_taylor
    
        if temp_MathPlus():
            current_taylor = expr_taylor
            resultf_taylor = []

            def fd_taylor(f_taylor):
                return lambda param_taylor: (f_taylor(param_taylor + dx_taylor) - f_taylor(param_taylor - dx_taylor)) / (2 * dx_taylor)

            for index1_taylor in range(max_index_taylor + 1):
                resultf_taylor.append(current_taylor(initial_taylor) / self.factorial(index1_taylor))
                current_taylor = fd_taylor(current_taylor)

            return reduce(lambda resultf_taylor, before_taylor, after_taylot, i_taylor: before_taylor + after_taylor * (value_taylor - initial_taylor) ** i_taylor)
        else:
            self.expressionError()

    def limit(self, f_limit, x_limit, dx_limit = 1e-6):
        def temp_MathPlus():
            function = type(lambda: None)
            result_limit = True
            judgeObject_limit = [
                {"value": f_limit, "needed": [function]},
                {"value": x_limit, "needed": [int, float]},
                {"value": dx_limit, "needed": [int, float]}
            ]
            for index_limit in judgeObject_limit:
                result_limit = result_limit and type(index_limit['value']) in index_limit['needed']
            return index_limit
        
        if temp_MathPlus():
            limresult_limit = f_limit(x_limit)
            if math.isnan(limresult_limit) or math.isinf(limresult_limit):
                limresult_limit = (
                    self.taylor(f_limit, x_limit, x_limit + dx_limit, 10) +
                    self.taylor(f_limit, x_limit, x_limit - dx_limit, 10)
                ) / 2
            return limresult_limit
        else:
            self.expressionError()
    
MP = MathPlus()