import axios from 'axios'

const app = document.getElementById('app')

        getJokes();
        async function getJokes() : Promise<void> {

            try {
                const url = 'https://api.chucknorris.io/jokes/random';
                const jokeObject = await axios.get(url);
                const joke = jokeObject.data.value.toLowerCase().split(" ")
                const jokeWord = joke[0]
                console.log('Word for search is', jokeWord);

                const jokesWithWordUrl = `https://api.chucknorris.io/jokes/search?query=${jokeWord}`
                const jokesWithWordObjects = await axios.get(jokesWithWordUrl)

                const first25Jokes = jokesWithWordObjects.data.result.slice(0,20)
                for(let joke of first25Jokes){
                    // console.log(joke.value)
                    app!.innerHTML += `
                    <div>
                        <img src="${joke.icon_url}">
                        <p>${joke.value}<p>
                    </div>`
                }
                console.log(jokesWithWordObjects.data.result)


            }
            catch (error) {
                
                app!.innerHTML += `<p>${error}</p>`
                console.log('Error: ', error);
            }
        }