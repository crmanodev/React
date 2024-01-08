
const heading = React.createElement('div',{id:"header"}, [React.createElement("h1",{}, 'I am an H1 Tag'),React.createElement("h2",{}, 'I am an H2 Tag')]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
