const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Lunda"),
        React.createElement("h1", {}, "Dog"),
        React.createElement("h1", {}, "Havenese")
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        { id: "Something-important" },
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]

    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));