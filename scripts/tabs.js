const tabsFunc = () => {
  const tabs = document.querySelectorAll(".card-detail__change");
  const tabsTitle = document.querySelector(".card-details__title");
  const tabsPrice = document.querySelector(".card-details__price");
  const tabsImage = document.querySelector(".card__image_item");
  const title = document.querySelector("title");

  const tabsOptions = [
    {
      name: "Graphite",
      memory: "128",
      price: 59000,
      image: "img/iPhone-graphite.webp",
      title: "iPhone 13 Pro 128GB Graphite",
    },
    {
      name: "Silver",
      memory: "256",
      price: 79000,
      image: "img/iPhone-silver.webp",
      title: "iPhone 13 Pro 256GB Silver",
    },
    {
      name: "Sierra Blue",
      memory: "512",
      price: 99000,
      image: "img/iPhone-sierra_blue.webp",
      title: "iPhone 13 Pro 512GB Sierra Blue",
    },
  ];

  const changeContent = (index) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
    tabsPrice.textContent = `${tabsOptions[index].price}₽`;

    tabsImage.setAttribute("src", tabsOptions[index].image);

    title.textContent = `${tabsOptions[index].title}`;
  };

  const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
      tab.classList.remove("active");

      if (index === indexClickedTab) {
        tab.classList.add("active");
      }
    });
    changeContent(indexClickedTab);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      changeActiveTabs(index);
    });
  });

  changeContent(0);
};
tabsFunc();
