
var Pokemon = class Pokemon {
  constructor(String name, String type, int hp, int def, int atk, boolean legend) {
    this.name = name;
    this.type= type;
    this.hp = hp;
    this.def= def; 
    this.atk = atk; 
    this.legend= legend;
  }
  
  
  
  
  
  get name() {
  return this.name; 
  }
  
  set name(n){
   this.name = n; 
  }
   
  get type() {
  return this.type; 
  }
  
  set type(t){
   this.type = t; 
  }
   
  get hp() {
  return this.hp; 
  }
  
  get def() {
  return this.def; 
  }
  
  get atk(){
  return this.atk; 
  }
  
  get legend(){
  return this.legend();
  }
  
};
