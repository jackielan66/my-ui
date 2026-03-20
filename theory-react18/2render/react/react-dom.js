export function render(element, container){
    let dom = element.type === 'TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(element.type)
    const isProperty = key => key !== 'children'
    // 1 we must filter the children property in the props. Because the children property is a new element in it.
    Object.keys(element.props)
    .filter(key => isProperty(key))
    .forEach(name => {
      dom[name] = element.props[name]
    })
    // 2 must render the children. Use recursion methods the children. Don't forget recursion the children. because each child
    // in the children is also a element.we must render it. Otherwise,it will not render properly.
    element.props.children.forEach(child => render(child, dom))
    container.appendChild(dom)
}

const ReactDom = {
  render
}

export default ReactDom;