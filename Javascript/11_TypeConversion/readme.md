Type Conversion 
---------------

- Type conversion in javascript refers to the automatic or explicit process of converting from one data type to another data type in javascript.


1. Implicit Type Conversion
2. Explicit Type Conversion 


## Implicit Type Conversion

- When the type conversion is done by javascript automatically is known as implicit type conversion.


```javascript
// String:

"100" + 50 //
"100" + true //
"100" + null // 
"100" + "" // 

//Number:

"100" / 50 // 
"100" - 2 // 
"100" * true 
"100" * null 
"100" * undefined
"LIT" / 2 

// Boolean :

let num = !!0 // 

```

Explicit Type Conversion
------------------------

- When the data type of a variable converts manually is called explicit type conversion.

```javascript

//String:

String(100) // 
String(true) // 

// Number :

Number("100") // 
Number("LIT") // 


// Boolean :

Boolean(100) // 
Boolean(NaN) // 

```