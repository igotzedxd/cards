const cards = document.querySelector(".cards");

let cardInfo = [
  {
    img: "https://unsplash.it/300/300",
    names: "Ben Dover",
    user: "BenDover",
    mail: "bendover@gmail.com",
  },
  {
    img: "https://unsplash.it/301/300",
    names: "Moe Lester",
    user: "MoeLester",
    mail: "moelester@gmail.com",
  },
  {
    img: "https://unsplash.it/300/301",
    names: "Jack Mehoff",
    user: "JackMehoff",
    mail: "jackmehoff@gmail.com",
  },
  {
    img: "https://unsplash.it/302/300",
    names: "Mike Litoris",
    user: "Mike Litoris",
    mail: "mikelitoris@gmail.com",
  },
  {
    img: "https://unsplash.it/300/302",
    names: "Johnny Singed",
    user: "Johnny Singed",
    mail: "johnnysinged@gmail.com",
  },
  {
    img: "https://unsplash.it/301/301",
    names: "Kurt Cobain",
    user: "Kurt Cobain",
    mail: "kurtcobain@gmail.com",
  },
];

cardInfo.forEach((card) => {
  cards.innerHTML += `
        <div class="card">
          <div class="top"><img src="${card.img}"</div>
          <div class="bottom">
            <h3>${card.names}</h3>
            <h4>${card.user}</h4>
            <p>${card.mail}</p>
            <a href="">SE WEBSITE</a>
          </div>
        </div> `;
});