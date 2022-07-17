const qa = document.getElementsByClassName("container");

for (var i = 0; i < qa.length; i++) {
  qa[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
