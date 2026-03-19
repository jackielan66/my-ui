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
function render(vnode) {
  let element = document.createElement(vnode.type);
  element.setAttribute("title", vnode.props.title);
  let textNode =document.createTextNode(vnode.props.children);
  element.appendChild(textNode);
  document.getElementById('root').appendChild(element);
}

render(profile);