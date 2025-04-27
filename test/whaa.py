import math

class MathPlus:
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
                for k_int in range(0, n_int + 1):
                    value_int += f_int(a_int + (b_int - a_int) / n_int * k_int) * ((b_int - a_int) / n_int)
                return math.floor(value_int * n_int) / n_int
            else:
                self.expressionError()
        else:
            self.expressionError()
    
    def derivative(f_d, a_d, dx_d = 1e-6) {
        def temp_MathPlus():
            function = type(lambda: None)
            res_d = True
            varObject_d = [
                {'value': f_d, 'needed': 'function'},
                {'value': a_d, 'needed': 'number'},
                {'value': dx_d, 'needed': 'number'}
            ]
            for i_d in varObject_d:
                res_d = res_d and type(i_d['value']) in i_d['needed']
            return res_d
        if temp_MathPlus():
            
    }

MP = MathPlus()