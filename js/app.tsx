/// <reference path="./../node_modules/@types/react/index.d.ts" />
/// <reference path="./../node_modules/@types/react-dom/index.d.ts" />

interface Props {
  text: string;
}

class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.text}</span>
  }
}

const root = document.getElementById('app');

ReactDOM.render(<MyComponent text="Hello world" />, root);