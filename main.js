let character = {
  name: "Xehanort",
  weapon: "keyblade",
  health: 100,
}

function slap() {
  character.health--
  draw()
}

function whack() {
  character.health -= 5
  draw()
}

function kick() {
  character.health -= 10
  draw()
}

function GameService() {

  let dataStore = this
  let character = new Xehanort("Xehanort", 100, 1, 5, 10);

  function Xehanort(name, health, slap, whack, kick) {
    this.name = name;
    this.health = health;
    this.attacks = {
      "slap": slap,
      "whack": whack,
      "kick": kick
    };
    this.attacks = slap
    this.health = [-2]
  };

  function Item(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
  };

}
function draw() {
  document.querySelector("#character-name").innerHTML = character.name
  document.querySelector("#health").innerHTML = character.health.toString()

}

draw()