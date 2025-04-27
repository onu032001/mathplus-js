class MathPlus:
    def expressionError():
        throw new R

    def factorial(self, value_fact):
        if type(value_fact) == int:
            if value_fact == 0:
                return 1
            elif value_fact - value_fact % 1 == value_fact and value_fact > 0:
                return value_fact * self.factorial(value_fact - 1)
        else:
            raise TypeError('It is not an expression')
    
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
                