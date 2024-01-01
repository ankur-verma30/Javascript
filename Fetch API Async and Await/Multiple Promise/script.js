function GetData(endpoint) {
  return new Promise((resovle, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          resovle(JSON.parse(this.responseText));
        } else {
          reject("Something went wrong");
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

async function GetAllData() {
  const movies = await GetData("PromisesPromiseALLmovies.json");
  console.log(movies);
  const actors = await GetData("PromisesPromiseALLactors.json");
  console.log(actors);
}
GetAllData();

//using fetch API with await and async
async function GetAllDataWithFetch() {
  const moviesRes = await fetch("PromisesPromiseALLmovies.json");
  const movies = moviesRes.json();
  console.log(movies);
}
GetAllDataWithFetch();

async function GetAllDataWithPromiseAll() {
  const [moviesRes, actorRes] = await Promise.all([
    fetch("PromisesPromiseALLmovies.json"),
    fetch("PromisesPromiseALLactors.json"),
  ]);

  const movies = await moviesRes.json();
  const actors = await actorRes.json();

  console.log(movies, actors);
}
GetAllDataWithPromiseAll();
