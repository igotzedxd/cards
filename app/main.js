import userData from ".././data/users.json" assert { type: "json" };

const app = {};

app.init = () => {
  const cards = document.querySelector(".cards");
  const gridBtn = document.querySelector(".grid-btn");
  const listBtn = document.querySelector(".list-btn");
  const gridTmpl = (user) => {
    return `
        <div class="card grid-view">
          <div class="top"><img src="${user.img}"</div>
          <div class="bottom">
            <h3>${user.names}</h3>
            <h4>${user.user}</h4>
            <p>${user.mail}</p>
            <a href="">SE WEBSITE</a>
          </div>
        </div> `;
  };

  const listTmpl = (user) => {
    return `
        <div class="card list-view">
          <div class="user">
          <img class="avatar" src="${user.img}"<div class="info">
          <span>
            <h2>${user.names}</h2>
            <h3>${user.user}</h3>
          </span>
          </div>
          <p class="mail">${user.mail}</p>
          <a href="">SE WEBSITE</a>
        </div> `;
  };

  const renderGridView = () => {
    cards.replaceChildren();
    userData.forEach((user) => {
      cards.insertAdjacentHTML("beforeend", gridTmpl(user));
    });
  };

  const renderListView = () => {
    cards.replaceChildren();
    userData.forEach((user) => {
      cards.insertAdjacentHTML("beforeend", listTmpl(user));
    });
  };
  renderGridView();
  gridBtn.addEventListener("click", renderGridView);
  listBtn.addEventListener("click", renderListView);
};

app.init();
