function Random(selector, ranking) {
    Component.call(this, selector);
    this.ranking = ranking;
    this.timeOut = {};
}

Random.prototype = Object.create(Component.prototype);
Random.constructor = Random;

Random.prototype.init = function () {
    const self = this;
    clearTimeout(self.timeOut);
    axios.get('http://localhost:3000/random-numbers')
            .then(function (response) {
                self.numbers = response.data.data.map(function (number) {
                    return {
                        id: number
                    }
                });
                self.ranking.refresh(self.numbers);
                self.render();
            })
            .catch(function (error) {
                console.error(error);
            });
    self.timeOut = setTimeout(function(){
        self.init();
    }, 10000);
};
