// import React is required if your babelrc's runtime is classic.
import React from '../react/index';
import ReactDOM from '../react/react-dom';
const profile = (
  <h1 title="h1" >
    React<a>href </a>
  </h1>
);
// console.log(profile);

ReactDOM.render(
  profile,
  document.getElementById('root')
);
