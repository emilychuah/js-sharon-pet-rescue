const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5, // Scale from 1 (refreshed) to 10 (exhausted)
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };

  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

// clover.sleep(); //You can get access to the pet object's properties since they're returned to the createPet function.
// baxter.play();

// console.log(clover, baxter);

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];
//console.log(allPets);

const showPets = function (petArray) {
  pets.innerHTML = ""; //This will clear your list whenever showPets is run, so that you can update it with fresh info.

  for (let pet of petArray) {
    let status = "ready to play!"; //Use 'let' here since I'll reassign the value.
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li"); //There's no need to use 'let' here since I won't reassign the variable.
    li.innerHTML = `<span class ="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
