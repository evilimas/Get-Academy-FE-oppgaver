import axios from 'axios';

const app: HTMLElement | null = document.getElementById('app');

getJokes();
async function getJokes(): Promise<void> {
  try {
    const url = 'https://api.chucknorris.io/jokes/random';
    const jokeObject = await axios.get(url);
    const joke = jokeObject.data.value.toLowerCase().split(' ');
    const jokeWord: string = joke[0];
    console.log('Word for search is', jokeWord);
    app!.innerHTML = `<p class="bold">Word for search is ${jokeWord}</p>`;

    const jokesWithWordUrl: string = `https://api.chucknorris.io/jokes/search?query=${jokeWord}`;
    const jokesWithWordObjects = await axios.get(jokesWithWordUrl);

    const first25Jokes = jokesWithWordObjects.data.result.slice(0, 20);
    for (let joke of first25Jokes) {
      app!.innerHTML += `
                    <div>
                        <img src="${joke.icon_url}">
                        <p>${joke.value}<p>
                        <hr>
                    </div>`;
    }
    console.log(jokesWithWordObjects.data.result);
  } catch (error) {
    app!.innerHTML += `
        <div>
            <p>${error}</p>
            <p>Most likely the word of search was to short, try again</p>
        </div>
    `;

    console.log('Error: ', error);
  }
}
