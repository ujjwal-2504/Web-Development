let url = "http://universities.hipolabs.com/search?country=";

let btn1 = document.querySelector('#searchCountry');

async function getUniversities(country) {

  try {
    let res = await axios.get(url+country);
    console.log(res);
    return res.data;
  }
  catch(err) {
    return [];
  }
}

btn1.addEventListener('click', async () => {

  let country = document.querySelector('#inputCountry').value;
  let colleges = await getUniversities(country);
  console.log(colleges);
  Show(colleges);

  showStatesOptions(country);
  // getStateUniversities(country);
});

function Show(colleges) {

  let list1 = document.querySelector('#list1');
  list1.innerHTML = "";

  for(college of colleges) {

    let listItem = document.createElement('li');
    listItem.innerText = college.name;
    list1.append(listItem);
  }
}

let h1 = document.querySelector('#stateName');
let stateOptions = document.querySelector('#inner');
let btn2 = document.querySelector('#searchState');

function showStatesOptions(country) {
  h1.innerText = `Search Universities within any state of ${country}`;
}

function getStateUniversities(college) {

  let list2 = document.querySelector('#list2');
  list2.innerHTML = "";

  for(college of colleges) {

    let listItem = document.createElement('li');
    listItem.innerText = college.name;
    list2.append(listItem);
  }
}