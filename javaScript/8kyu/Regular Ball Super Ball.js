// https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript

var Ball = function (ballType) {
    this.ballType = ballType || 'regular';
};

class Ball{
    constructor(ballType = 'regular'){
        this.ballType = ballType;
    }
}