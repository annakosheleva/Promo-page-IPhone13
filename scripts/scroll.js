const scrollFunc = () => {
  const links = document.querySelectorAll(".header-menu__item a");
  const link = document.querySelector(".card-details__link-characteristics");

  seamless.polyfill(); //добавление метода плавной прокрутки для браузера сафари

  links.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();

      const id = element.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      if (section) {
        seamless.elementScrollIntoView(section, {
          behavior: "smooth",
          block: "start",
        });
      } else {
        seamless.elementScrollIntoView(
          document.querySelector("#characteristics"),
          {
            behavior: "smooth",
            block: "center",
            inline: "center",
          }
        );
      }
    });
  });

  link.addEventListener("click", (event) => {
    event.preventDefault();
    link.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};
scrollFunc();
