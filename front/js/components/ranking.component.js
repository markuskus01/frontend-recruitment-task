function Ranking(selector) {
    Component.call(this, selector);
}

Ranking.prototype = Object.create(Component.prototype);
Ranking.constructor = Ranking;

Ranking.prototype.init = function () {
    const self = this;

    axios.get('http://localhost:3000/numbers')
            .then(function (response) {
                self.numbers = response.data.data.map(function (number) {
                    return {
                        id: number,
                        count: 0
                    }
                });

                self.render();
            })
            .catch(function (error) {
                console.error(error);
            });
    console.log("Component: " + this.selector + " initialized");
};

Ranking.prototype.refresh = function(randNumb){
    for(randEl in randNumb){
        for(rankEl in this.numbers){
            if(this.numbers[rankEl].id === randNumb[randEl].id){
                this.numbers[rankEl].count += 1;
                break;
            }
        }
    }
    this.sort();
};

Ranking.prototype.sort = function () {
    if (this.numbers.length > 1) {
        this.numbers.sort(function (a, b) {
            return b.count - a.count
        });
    }
    this.render();
};