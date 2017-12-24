
var Pokemon = class Pokemon {
  constructor(String name, String type, int hp, int def, int atk, boolean legend) {
    this.name = name;
    this.type= type;
    this.hp = hp;
    this.def= def; 
    this.atk = atk; 
    this.legend= legend;
  }
  
  attack(Pokemon poke){
  poke.sethp(poke.hp- (this.atk-poke.def);
  return poke.hp;    
  }
  
  aliveCheck(}{
  
     //if hp is greater than 0, return true
             
     // else return false 
             
  }
  
 all(){
   
   //return all the pokemons 
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
  
  set hp(p){
   this.hp = p; 
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
