function Player(name){
    this.name = name;
    this.level = 1;
    this.points = 0;
}

Player.prototype.gainXp = function(amount){
    this.points += amount;
    if(this.points > 10){
        this.level += 1;
        this.points -= 10;
    }
}

Player.prototype.display = function(){
    console.log(`${this.name} is level ${this.level} with ${this.points} experience points`);
}

let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
// console.log(player1);
// console.log(player2);
player1.gainXp(3);
player2.gainXp(2);
// console.log(player1);
// console.log(player2);
player1.gainXp(8);
player2.gainXp(4);
// console.log(player1);
// console.log(player2);

player1.display();
player2.display();
