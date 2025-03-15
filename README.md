# mathplus-js (Sorry for too many updates)

This is a **JS repository** for **additional math functions and constants**.

## Functions and constants explanation

|Function or constant|explanation(?)|Parameters|
|:-|:-|:-|
|`integral(f,a,b,n)`|This function uses Gaussian sum. Represents $\\int_a^b f(x) dx$.|`f`: Function to integrate.<br/>`a`: Lower bound for integration.<br/>`b`: Upper bound for integration.<br/>`n`: Intervals to integrate. Default is `200`.|
|`derivative(f,a,dx)`|This function uses first principle. Represents $\\frac{d}{dx} f(x)\\ \\text{where}\\ x=a$.|`f`: Function to differentiate.<br/>`a`: value for differentiation.<br/>`dx`: Small value *(Epsilon or Delta x)*. Default is `1e-6` (or $1 \\times 10^{-6}$).|
|`sumf(f,a,b)`,  `prodf(f,a,b)`|Summation and Product. Same as the principle and the definition. Represents $\sum\limits_{x=a}^b f(x)$, $\prod\limits_{x=a}^b f(x)$.|-|
|`trig(trigf, angle)`|This function calculates advanced trigonometric calculations.|`trigf`: Advanced trigonometric function. Uses:<br/>`{'trig': 'sec'}` Represents **sec**,<br/>`{'trig': 'csc', 'hyp': true}` Represents **csch**.<br/>`angle`: Desired value.|
|`nth_root(value, n)`|This function calculates nth roots. Represents $\\sqrt\[n\]{\\text{value}}$.|`value`, `n`: Desired value.|
|`log_base(a,b)`|This function calculates logarithms. Represents $\\log_a b$.|`a`: Base, `b`: Argument.|
|`phi`|This constant returns the golden ratio. Represents $\\phi = \\frac{1+\\sqrt{5}}{2}$.|-|
|`solve(lhs,rhs,x,n,dx)`|This function solves equations. Represents $\\text{lhs} = \\text{rhs}$.|`lhs, rhs`: Function to solve.<br/>`x`: Deafult value. Deafult is `0`.<br/>`n`: Entries. Default is `500`.<br/>`dx`: Small value *(Epsilon or Delta x)*. Default is `1e-6` (or $1 \\times 10^{-6}$).|
|`taylor(f,x,a,max,dx)`|This function converts the function to taylor series.|`f`: Function.<br/>`x`: Desired value.<br/>`a`: Initial value.<br/>`max`: Maximum index.<br/>`dx`: Small value *(Epsilon or Delta x)*. Default is `1e-6` (or $1 \\times 10^{-6}$).|
|`limit(f,a)`|This function calculates limits. Represents $\\lim_{x \\to a} f(x)$.|`f`: Function to calculate limit.<br/>`a`: Value.|

**Errors:** An error occurs if you:
* Don't type the expression correctly. It occurs an error `It is not an expression`.

## ETC

~~README.md file is so weird. *(Not that weird.)*~~

Something is **wrong** with this site. Please **don't fork** this repository until I fix the error.
