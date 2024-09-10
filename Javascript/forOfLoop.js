let cars = ["Audi", "BMW", "TATA", "Hundai", "Lambo", "Ferrai", "XUV", "Toyota"];

let heros = [["ironman", "spiderman", "doctor strange", "hulk", "daredevil"], ["batman", "superman", "aquaman", "wonder woman", "flash"]];


for(car of cars) {
  console.log(car);
}

for(list of heros) {
  for(hero of list) {
      console.log(hero);
  }
}