# mathplus-js

This is a **JS repository** for **additional math functions and constants**.

## Functions and constants explanation

|Function or constant|explanation(?)|Parameters|
|:-|:-|:-|
|`integral(f,a,b,n)`|This function uses Gaussian sum.|`f`: Function to integrate.<br/>`a`: Lower bound for integration.<br/>`b`: Upper bound for integration.<br/>`n`: Intervals to integrate. Default is `200`.|
|`derivative(f,a,dx)`|This function uses first principle.|`f`: Function to differentiate.<br/>`a`: value for differentiate.<br/>`dx`: Small value *(Epsilon or Delta x)*. Default is<br/>`9e-8` *(9 &times; 10<sup>&minus;8</sup> in Traditional form)*.|
|`trig(trigf, angle)`|This function calculates advanced trigonometric calculations.|`trigf`: Advanced trigonometric function. Uses:<br/>`{'trig': 'sec'}` Represents **sec**,<br/>`{'trig': 'csc', 'hyp': true}` Represents **csch**.<br/>`angle`: Desired value.|
|`nth_root(value, n)`|This function calculates nth roots.|`value`, `n`: Desired value.|
|`log_base(a,b)`|This function calculates logarithms|`a`: Base, `b`: Argument.|
|`phi`|This constant returns the golden ratio.|-|

**Errors:** If you don't type the expression correctly.

~~readme is uhh~~
