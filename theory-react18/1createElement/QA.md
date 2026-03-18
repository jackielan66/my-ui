### 2.启航阶段 🚀

#### 传统 JSX 编译流程
用户编写 jsx → babel 编译 → `React.createElement()` → 返回虚拟 dom → `render` → 返回真实 dom 渲染页面

---

#### React 17 新 JSX 转换器
在 React 17 中，Facebook 推出了一个新的 JSX 转换器：`@babel/plugin-transform-react-jsx`。它在编译时引入了 `_jsx` 和 `_jsxs` 两个新的函数，作为替代 `React.createElement` 的工具。这两个新的函数只在编译时使用，并不会出现在运行时代码中。

`_jsx` 和 `_jsxs` 与 `React.createElement` 相比做了以下优化：

1.  **静态子元素的优化**：在新的转换器中，如果 JSX 元素有静态子元素，那么它会被编译成 `_jsxs` 调用，而非 `_jsx`。`_jsxs` 可以处理静态子元素的数组，从而避免在每次渲染时创建新的数组，以提高性能。
2.  **key 属性的优化**：新的转换器能够在编译时分辩出静态和动态的 key 属性，并将它们传递给 `_jsx` 或 `_jsxs` 函数。这样就避免了不必要的 key 属性计算，提高了性能。
3.  **开发模式的优化**：新的转换器通过一个 `__source` 参数在开发模式下提供更多的调试信息。这个参数在生产模式下不会被包含，以减小代码体积。
4.  **减少了运行时的依赖**：与 `React.createElement` 不同，`_jsx` 和 `_jsxs` 并不需要 React 库的运行时版本。这意味着，在未来，React 可以去除掉它的 `createElement` 函数，从而减小库的体积。
5.  **优化对象字面量**：当 JSX 属性被编译为对象字面量时，新的转换器可以在编译时标识出这些字面量，从而避免在每次渲染时创建新的对象。

总的来说，新的 `_jsx` 和 `_jsxs` 函数为 JSX 提供了更好的优化空间，从而提高了性能并减小了代码体积。

---

需要我帮你把这段内容整理成**面试可直接背诵的精简版**吗？这样你复习起来会更高效。

## 1 how jsx change to html
 Using babel to transpile jsx to js. we offen use plugin `@babel/plugin-transform-react-jsx` to change jsx to html.The plugin has two runtime. one is classic, another is automatic. 
 
 when u use classic runtime, u need to import `React` to use jsx. And the compiler result is like `React.createElement(...) `. 
 when u use automatic runtime, u dont need to import `React`, and the compiler result is like 
 
 ```
 import { jsx as _jsx } from "react/jsx-runtime";
 import { jsxs as _jsxs } from "react/jsx-runtime";

const profile = _jsxs("div", {
  children: [
    _jsx("img", {
      src: "avatar.png",
      className: "profile",
    }),
    _jsx("h3", {
      children: [user.firstName, user.lastName].join(" "),
    }),
  ],
});
```
the above is defferent.

## how is the element structure after the `@babel/plugin-transform-react-jsx` change the JSX
after the `@babel/plugin-transform-react-jsx` change the JSX, the element structure is like this:
```
let node = {
  type: 'div',
  props: {},
  children: []
}
```
when we console.log(node), we will see the element structure live above.
So we just need to implement a function to create a element and use the parameter to set the element's props and children.





