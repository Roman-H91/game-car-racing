let Car = function (x, y) {
    this.x = x;
    this.y = y;
};

Car.prototype.draw = function () {
    let carHtml = '<img src="./image/car.png">';
    this.carElement = $(carHtml);
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });

    $("body").append(this.carElement);
};

Car.prototype.moveRight = function () {
    this.x += 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveLeft = function () {
    this.x -= 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveUp = function () {
    this.y -= 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveDown = function () {
    this.y += 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.speed = function () {
    setInterval(() => {
        this.x += 5;
        this.carElement.css({
            left: this.x,
            top: this.y
        });
    }, 50);
};

let tesla = new Car(20, 20);
let nissan = new Car(100, 200);

tesla.draw();
nissan.draw();

setInterval(() => {
    nissan.moveRight()
}, 500);

console.log("For moving car use: tesla or nissan moveRight(), moveLeft(), moveUp() or moveDown(). For example: tesla.moveRight(). Try first tesla.speed()");