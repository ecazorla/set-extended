# set-extender

This module's aim is to expand the already available functionalities of the [Set Class]('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set') in JS to cover most of the usual operators when using applied [Set Theory]('https://en.wikipedia.org/wiki/Set_theory'), such as: Union, Intersection or Symetric Difference of sets, Power Set, Cartesian Product, and so on.

## Installation

set-extender is available on npm package manager.

```
npm install set-extender
```

## Usage

First, import the module. I like to call it SuperSet, as it gives super powers to the Set class.

```
const SuperSet = require('set-extender');
```

### Evaluate if a set is a subset of a set: 
> _MySet.subsetOf(A)_

<!---
\begin{array}{c}
A = \{1, 2\} \\
B = \{1, 2, 3, 4, 5\} \\
\implies \\
A \subset B \\
A \nsubseteq B \\
\end{array}
--->

<p align="center">
<img src="https://latex.codecogs.com/svg.latex?%5Cbegin%7Barray%7D%7Bc%7D%20A%20%3D%20%5C%7B1%2C%202%5C%7D%20%5C%5C%20B%20%3D%20%5C%7B1%2C%202%2C%203%2C%204%2C%205%5C%7D%20%5C%5C%20%5Cimplies%20%5C%5C%20A%20%5Csubset%20B%20%5C%5C%20A%20%5Cnsubseteq%20B%20%5C%5C%20%5Cend%7Barray%7D">
</p>

```
const A = SuperSet.of([1,2]);
const B = SuperSet.of([1,2,3,4,5]);
```

```
console.log(A.subsetOf(B))
console.log(B.subsetOf(A))
---
true
false
```

### Union of sets: 
> _SuperSet.union(...args)_

<!---
\begin{array}{c}
A = \{1, 2, 3\} \\
B = \{3, 4, 5\} \\
A \cup B = \{1, 2, 3, 4, 5\} \\
\end{array}
--->

<p align="center">
<img src="https://latex.codecogs.com/svg.latex?%5Cbegin%7Barray%7D%7Bc%7D%20A%20%3D%20%5C%7B1%2C%202%2C%203%5C%7D%20%5C%5C%20B%20%3D%20%5C%7B3%2C%204%2C%205%5C%7D%20%5C%5C%20A%20%5Ccup%20B%20%3D%20%5C%7B1%2C%202%2C%203%2C%204%2C%205%5C%7D%20%5C%5C%20%5Cend%7Barray%7D">
</p>

```
const A = SuperSet.of([1,2,3]);
const B = SuperSet.of([3,4,5]);
const C = SuperSet.union(A,B);
```

```
console.log(C)
---
SuperSet [Set] {1, 2, 3, 4, 5}
```

### Intersection of sets
> _SuperSet.intersection(...args)_

<!---
\begin{array}{c}
A = \{1, 2, 3\} \\
B = \{3, 4, 5\} \\
A \cap B = \{3\} \\
\end{array}
--->

<p align="center">
<img src="https://latex.codecogs.com/svg.latex?%5Cbegin%7Barray%7D%7Bc%7D%20A%20%3D%20%5C%7B1%2C%202%2C%203%5C%7D%20%5C%5C%20B%20%3D%20%5C%7B3%2C%204%2C%205%5C%7D%20%5C%5C%20A%20%5Ccap%20B%20%3D%20%5C%7B3%5C%7D%20%5C%5C%20%5Cend%7Barray%7D">
</p>

```
const A = SuperSet.of([1,2,3]);
const B = SuperSet.of([3,4,5]);
const C = SuperSet.intersection(A,B);
```

```
console.log(C)
---
SuperSet [Set] {3}
```

### Cartesian product of 2 sets
> _SuperSet.cartesianProduct(A,B)_

<!---
\begin{array}{c}
A = \{1, 2\} \\
B = \{1, 2, 3\} \\
A \times B = \{ (1,1),(1,2),(1,3),(2,1),(2,2),(2,3)
    \} \\
\end{array}
--->

<p align="center">
<img src="https://latex.codecogs.com/svg.latex?%5Cbegin%7Barray%7D%7Bc%7D%20A%20%3D%20%5C%7B1%2C%202%5C%7D%20%5C%5C%20B%20%3D%20%5C%7B1%2C%202%2C%203%5C%7D%20%5C%5C%20A%20%5Ctimes%20B%20%3D%20%5C%7B%20%281%2C1%29%2C%281%2C2%29%2C%281%2C3%29%2C%282%2C1%29%2C%282%2C2%29%2C%282%2C3%29%20%5C%7D%20%5C%5C%20%5Cend%7Barray%7D">
</p>

```
const A = SuperSet.of([1,2]);
const B = SuperSet.of([1,2,3]);
const C = SuperSet.cartesianProduct(A,B);
```

```
console.log(C)
---
SuperSet [Set] { [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 2 ], [ 2, 3 ] }
```

### Difference of 2 sets
> _MySet.difference(A)_

<!---
\begin{array}{c}
A = \{1, 2\} \\
B = \{1, 2, 3, 4\} \\
B  \setminus A = \{ 3,4\} 
\end{array}
--->

<p align="center">
<img src="https://latex.codecogs.com/svg.latex?%5Cbegin%7Barray%7D%7Bc%7D%20A%20%3D%20%5C%7B1%2C%202%5C%7D%20%5C%5C%20B%20%3D%20%5C%7B1%2C%202%2C%203%2C%204%5C%7D%20%5C%5C%20B%20%5Csetminus%20A%20%3D%20%5C%7B%203%2C4%5C%7D%20%5Cend%7Barray%7D">
</p>

```
const A = SuperSet.of([1,2]);
const B = SuperSet.of([1,2,3,4]);
const C = B.difference(A);
```

```
console.log(C)
---
SuperSet [Set] { 3, 4 }
```

### Symmetric Difference of 2 sets
> _MySet.symmetricDifference(A)_

Remember: The [Symmetric Difference]('https://en.wikipedia.org/wiki/Symmetric_difference') of two sets is the set of elements which are in either of the sets and not in their intersection.

<!---
\begin{array}{c}
A = \{1, 2, 3, 4\} \\
B = \{3, 4, 5, 6\} \\
A  \triangle B = \{ 1,2,5,6\} 
\end{array}
--->

<p align="center">
<img src="https://latex.codecogs.com/svg.latex?%5Cbegin%7Barray%7D%7Bc%7D%20A%20%3D%20%5C%7B1%2C%202%2C%203%2C%204%5C%7D%20%5C%5C%20B%20%3D%20%5C%7B3%2C%204%2C%205%2C%206%5C%7D%20%5C%5C%20A%20%5Ctriangle%20B%20%3D%20%5C%7B%201%2C2%2C5%2C6%5C%7D%20%5Cend%7Barray%7D">
</p>

```
const A = SuperSet.of([1,2]);
const B = SuperSet.of([1,2,3,4]);
const C = A.symmetricDifference(B);
```

```
console.log(C)
---
SuperSet [Set] { 1, 2, 5, 6 }
```

### Cardinal of a Set
> _MySet.cardinal_

Remember: We name cardinal of a Set to it's size. Similar to `.length` on an array

<!---
\begin{array}{c}
A = \{1, 2, 3, 4, 5\} \\
|A| = 5 \\
\end{array}
--->

<p align="center">
<img src="https://latex.codecogs.com/svg.latex?%5Cbegin%7Barray%7D%7Bc%7D%20A%20%3D%20%5C%7B1%2C%202%2C%203%2C%204%2C%205%5C%7D%20%5C%5C%20%7CA%7C%20%3D%205%20%5C%5C%20%5Cend%7Barray%7D">
</p>

```
const A = SuperSet.of([1,2,3,4,5]);
```

```
console.log(A.cardinal)
---
5
```

### Power Set of a Set
> _MySet.powerSet_

Remember: The definition of the power set is the set of all the possibles subsets of a certain set: [Power Set]('https://en.wikipedia.org/wiki/Power_set')

<!---
\begin{array}{c}
A = \{1, 2\} \\
\mathcal{P}(A) = \{ \{\},  \{1\}, \{2\}, \{1,2\} \} \\
\end{array}

--->

<p align="center">
<img src="https://latex.codecogs.com/svg.latex?%5Cbegin%7Barray%7D%7Bc%7D%20A%20%3D%20%5C%7B1%2C%202%5C%7D%20%5C%5C%20%5Cmathcal%7BP%7D%28A%29%20%3D%20%5C%7B%20%5C%7B%5C%7D%2C%20%5C%7B1%5C%7D%2C%20%5C%7B2%5C%7D%2C%20%5C%7B1%2C2%5C%7D%20%5C%7D%20%5C%5C%20%5Cend%7Barray%7D">
</p>

```
const A = SuperSet.of([1,2]);
```

```
console.log(A.powerSet)
---
SuperSet [Set] {
  SuperSet [Set] {},
  SuperSet [Set] { 2 },
  SuperSet [Set] { 1 },
  SuperSet [Set] { 1, 2 } 
}
```

## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)
