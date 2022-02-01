let parent = document.getElementById("pro");

function getData(page) {
  fetch(
    `https://api.pexels.com/v1/search?query=bikes&page=${page}&per_page=25`,
    {
      method: "GET",
      headers: {
        Authorization:
          "563492ad6f9170000100000153773b5c95d14d0291140d39b7064f0e",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => showProd(response.photos))
    .catch((e) => console.log(e));
}
getData(1);

function showProd(data) {
  data.forEach((product) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = product.src.large2x;
    let p = document.createElement("p");
    p.setAttribute("class", "all");
    p.textContent = product.alt;
    let h2 = document.createElement("h2");
    h2.setAttribute("class", "all");
    h2.textContent = "Photographer " + product.photographer;
    div.append(img, p, h2);
    parent.append(div);
  });
}
let i = 2;
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    getData(i++);
  }
});

function scrolup() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}