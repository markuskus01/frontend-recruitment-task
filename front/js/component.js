function Component(selector) {
    this.selector = selector;
    this.numbers = [];
}

Component.prototype.init = function () {
    console.log("Component: " + this.selector + " initialized");
};

Component.prototype.getDOMElement = function () {
    return document.querySelector(this.selector);
};

Component.prototype.render = function () {
    const container = this.getDOMElement();
    container.innerHTML = "";

    this.numbers.forEach(function (number) {
        const listElement = document.createElement('li');
        listElement.classList.add('list-group-item');
        listElement.innerHTML = number.id;

        container.appendChild(listElement);
    });
    console.log("Component: " + this.selector + " rendered");
};