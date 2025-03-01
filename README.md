# mathplus-js (Sorry for too many updates)

This is a **JS repository** for **additional math functions and constants**.

## Functions and constants explanation

|Function or constant|explanation(?)|Parameters|
|:-|:-|:-|
|`integral(f,a,b,n)`|This function uses Gaussian sum.|`f`: Function to integrate.<br/>`a`: Lower bound for integration.<br/>`b`: Upper bound for integration.<br/>`n`: Intervals to integrate. Default is `200`.|
|`derivative(f,a,dx)`|This function uses first principle.|`f`: Function to differentiate.<br/>`a`: value for differentiation.<br/>`dx`: Small value *(Epsilon or Delta x)*. Default is `9e-8` *(9 &times; 10<sup>&minus;8</sup> in Traditional form)*.|
|`sumf(f,a,b)`,  `prodf(f,a,b)`|Summation and Product. Same as the principle and the definition.|-|
|`trig(trigf, angle)`|This function calculates advanced trigonometric calculations.|`trigf`: Advanced trigonometric function. Uses:<br/>`{'trig': 'sec'}` Represents **sec**,<br/>`{'trig': 'csc', 'hyp': true}` Represents **csch**.<br/>`angle`: Desired value.|
|`nth_root(value, n)`|This function calculates nth roots.|`value`, `n`: Desired value.|
|`log_base(a,b)`|This function calculates logarithms|`a`: Base, `b`: Argument.|
|`phi`|This constant returns the golden ratio.|-|
|`solve(lhs,rhs,x,n,dx)`|This function solves equations.|`lhs, rhs`: Function to solve.<br/>`x`: Deafult value. Deafult is `0`.<br/>`n`: Entries. Default is `500`.<br/>`dx`: Small value *(Epsilon or Delta x)*. Default is `9e-8` *(9 &times; 10<sup>&minus;8</sup> in Traditional form)*.|
|`limit(f,x,dx)`|This function calculates limits.|`f`: Function to calculate limit.<br/>`x`: Value.<br/>`dx`: Small value *(Epsilon or Delta x)*. Default is `9e-8` *(9 &times; 10<sup>&minus;8</sup> in Traditional form)*.|

**Errors:** An error occurs if you:
* Don't type the expression correctly. It occurs an error `It is not an expression`.

## ETC

~~README.md file is so weird. *(Not that weird.)*~~

Something is **wrong** with this site. Please **don't fork** this repository until I fix the error.
