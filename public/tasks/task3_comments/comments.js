// initialize swiper js

const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var post = document.getElementById("post");
post.addEventListener("click", function () {
  var commentBoxValue = document.getElementById("comment-box").value;

  let card = document.createElement("div");
  card.className = "swiper-slide";

  let flex = document.createElement("div");
  flex.className = "flex";

  let comment = document.createElement("div");
  comment.innerText = commentBoxValue;
  comment.className = "comments";

  let profile = document.createElement("div");
  profile.className = "profile";

  let a = document.createElement("a");
  a.href = "#";
  a.innerText = "Carlos";

  profile.appendChild(a);
  flex.appendChild(comment);
  flex.appendChild(profile);
  card.appendChild(flex);

  document.getElementById("slide-container").prepend(card);
});

var comment_box = document.getElementById("comment-box");
comment_box.addEventListener("keyup", function () {
  //Check for the input's value
  if (e.target.value == "") {
    document.getElementById("post").disabled = true;
  } else {
    document.getElementById("post").disabled = false;
  }
});
