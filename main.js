let character = {
  name: "Xehanort",
  weapon: "keyblade",
  health: 100,
  items: []
}

function slap() {
  useItems()
  character.health--
  draw()
}

function whack() {
  useItems()
  character.health -= 5
  draw()
}

function kick() {
  useItems()
  character.health -= 10
  draw()
}

function useItems() {
  for (let i = 0; i < character.items.length; i++) {
    let item = character.items[i]
    character.health -= item.modifier
  }
}

// function GameService() {

// let dataStore = this
// let character = new Xehanort("Xehanort", 100, 1, 5, 10);

function Xehanort(name, health, slap, whack, kick) {
  this.name = name;
  this.health = health;
  this.attacks = {
    "slap": slap,
    "whack": whack,
    "kick": kick
  };
};

function Item(name, modifier, description) {
  this.name = name;
  this.modifier = modifier;
  this.description = description;
};

let summon = new Item("Summon", 8, "Ifrit")
let assist = new Item("Assist", 4, "Rikku")
let kingdomKey = new Item("kingdomKey", 2, "Whack!")

let items = { summon, assist, kingdomKey }

function findItem(name) {
  console.log(name)
  let foundItem = items[name] //bracket notation
  console.log(foundItem)
  character.items.push(foundItem)
}

// }
function draw() {
  document.querySelector("#character-name").innerHTML = character.name
  document.querySelector("#health").innerHTML = character.health.toString()

}

draw()