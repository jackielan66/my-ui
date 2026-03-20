

export default function createElement(tagName, props, ...children) {
    // parameter is converted by babel.The babel plugin help us transform the JSX to the parameter.
    // so when we use jsx. BABEL is required.
    // tagname like div components
    // props like title style classname 

    // console.log(tagName, props, children,"selft closing");

    return {
        type: tagName,
        props: {
            ...props,
            children: children.map(child =>
                typeof child === "object"
                    ? child
                    : createTextElement(child)
            )
        }
    };
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    };
}