// import React is required if your babelrc's runtime is classic.
import React from "react";
const profile = (
  <h1 title="h1" >
    React
  </h1>
);
console.log(profile);

// the profile structure is as follows
// {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "title": "h1",
//         "children": "React"
//     }
// }

// Now let us implement a function to convert the above structure to the dom
// so i think the most important thing is to what the JSX element structure is after convertion using the @babel/preset-react.
// this is the most important thing in lesson 1.
function render(vnode) {
  let element = document.createElement(vnode.type);
  element.setAttribute("title", vnode.props.title);
  let textNode =document.createTextNode(vnode.props.children);
  element.appendChild(textNode);
  document.getElementById('root').appendChild(element);
}

render(profile);