function fetchSimpsonJSON() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios
        .get(url)
        .then(function (response) {
            console.log(response.data);
            return response.data; // response.data instead of response.json() with fetch
        })
        .then(function (simpson) {
            console.log(simpson)
            const simpsonHtml = `
          <h1>${simpson[0].character}</h1>
          <img src="${simpson[0].image}" />
          <p>${simpson[0].quote}</p>
        `;
            document.querySelector('#simpson').innerHTML = simpsonHtml;
        });
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', (event) => {
    event.preventDefault();
    fetchSimpsonJSON();
});
