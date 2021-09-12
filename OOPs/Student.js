class students{
    constructor(Name, Age, Clas){
        this.myname = Name;
        this.myage = Age;
        this.myclass = Clas;
    }
    biodata(){
        return `Hi my name is ${this.myname}. My age is ${this.myage}. I have done my ${this.myclass}.`;
    }
}

class player extends students{
    constructor(Name, Age, Clas, Game){
        super( Name, Age, Clas);
        this.mygame = Game;
    }

    player_bio(){
        return`${super.biodata()} I am player of ${this.mygame}.`;
    }
}


class hobby extends player{
    constructor(Name, Age, Clas, Game, Hobbys){
        super(Name, Age, Clas, Game);
        this.myHobbys = Hobbys;
    }

    aboutHobbys(){
        return `${super.player_bio()} My Hobby is ${this.myHobbys}.`
    }
}


let hobbyObj = new hobby('Abhishek', 26, 'BA','Criket', 'Net Surfing, Reading Book') 

console.log(hobbyObj.aboutHobbys());
