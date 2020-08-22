class Dustbin{
    constructor(){
        boxb = new Ground(1000,580,200,20,"grey");
        boxl = new Ground(910,530,20,100,"grey");
        boxr = new Ground(1090,530,20,100,"grey");
    }
    display(){
        boxb.display();
        boxl.display();
        boxr.display();
    }
}