## let us implement React library,including a react.createElement function and a react render function.

first,we need to create a folder which named react. The folder contains below files:
1. index.js
2. createElement function:
3. render function

## createElement function
createElement function's parameter is like this:`createElement(type, props, a,b,c,d)`,
because a b c d is separated by comma.so we can use rest parameter to get them.(...children)
where is the parameter from. because the `@babel/preset-react` plugin help us to transform jsx to js.


and createElement function return a data structure like this:
```
{
  type: 'div',
  props: {
    title: 'this is a title',
    children: []
  },

}
```

so this is the important part.we just need to implement a function and return a data like above.

