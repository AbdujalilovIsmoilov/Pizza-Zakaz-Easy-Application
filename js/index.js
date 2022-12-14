"use strict";

// Array
const selectArray = [];
const sizesArray = [];
const productsArray = [];
const thingProductsArray = [];

// Select Changed
$(".section__pitsa_container_box_select").addEventListener("change", (e) => {
  $(".section__pitsa_container_box_result-paragraph").innerHTML =
    e.target.value;
  selectArray.push(e.target.value);
});

// Sizes Result
for (
  let i = 0;
  i < $$(".section__pitsa_container_box_sizes-size").length;
  i++
) {
  $$(".section__pitsa_container_box_sizes-size")[i].addEventListener(
    "click",
    (e) => {
      $(".section__pitsa_container_box_results-paragraph").innerHTML =
        e.target.innerHTML;
      sizesArray.push(e.target.innerHTML);
    }
  );
}

// The sizes hide and show BgColor Tabs
function hideTabSize() {
  $$(".section__pitsa_container_box_sizes-size").forEach((item) => {
    item.classList.remove("active");
  });
}

function showTabSize(i = 0) {
  $$(".section__pitsa_container_box_sizes-size")[i].classList.add("active");
}

hideTabSize();
showTabSize();

$(".section__pitsa_container_box_sizes").addEventListener("click", (e) => {
  if (
    e.target &&
    e.target.classList.contains("section__pitsa_container_box_sizes-size")
  ) {
    for (
      let i = 0;
      i < $$(".section__pitsa_container_box_sizes-size").length;
      i++
    ) {
      if (e.target == $$(".section__pitsa_container_box_sizes-size")[i]) {
        hideTabSize();
        showTabSize(i);
      }
    }
  }
});

// Products Changed
for (
  let i = 0;
  i < $$(".section__pitsa_container_box_form_box_label-input").length;
  i++
) {
  const elements = document.createElement("li");
  $$(".section__pitsa_container_box_form_box_label-input")[i].addEventListener(
    "click",
    (e) => {
      if (e.target.checked == true) {
        elements.innerHTML = e.target.value;
        elements.classList.add("section__pitsa_container_box_list-item");
        productsArray.push(e.target.value);
      } else {
        elements.innerHTML = "";
        elements.classList.remove("section__pitsa_container_box_list-item");
        productsArray.pop();
      }
      $(".section__pitsa_container_box_list").appendChild(elements);
    }
  );
}

// Products kinds of Things
for (
  let i = 0;
  i < $$(".section__pitsa_container_box_forms_box_label-input").length;
  i++
) {
  const element = document.createElement("li");
  $$(".section__pitsa_container_box_forms_box_label-input")[i].addEventListener(
    "click",
    (e) => {
      if (e.target.checked == true) {
        element.innerHTML = e.target.value;
        element.classList.add("section__pitsa_container_box_list-item");
        thingProductsArray.push(e.target.value);
      } else {
        element.innerHTML = "";
        element.classList.remove("section__pitsa_container_box_list-item");
        thingProductsArray.pop();
      }
      $(".section__pitsa_container_box_lists").appendChild(element);
    }
  );
}

// Modal Inputs Changed Function
$(".section__pitsa_container_box-btn").addEventListener("click", (e) => {
  if (
    selectArray.length <= 0 ||
    sizesArray.length <= 0 ||
    productsArray.length <= 0
  ) {
    $(".modal").setAttribute("class", "modal active");
    $("#check").setAttribute("class", "fa fa-x");
    $("body").style.overflow = "hidden";
  } else {
    $(".modal").setAttribute("class", "modal active");
    $("#check").setAttribute("class", "fa fa-check");
    $("body").style.overflow = "hidden";
  }
});

// Modal Remove Keyboard code

this.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    $(".modal").classList.remove("active");
    $("body").style.overflow = "";
  }
});

// Modal Remove

$("#modal-remove").addEventListener("click", () => {
  if (
    selectArray.length <= 0 ||
    sizesArray.length <= 0 ||
    productsArray.length <= 0
  ) {
    $(".modal").setAttribute("class", "modal");
    $("#check").setAttribute("class", "fa fa-x");
  }
  if (
    selectArray.length != 0 &&
    sizesArray.length != 0 &&
    productsArray.length != 0
  ) {
    $(".modal").setAttribute("class", "modal");
    $("#check").setAttribute("class", "fa fa-x");
    $("#modal-remove").setAttribute("href", "index.html");
    $("body").style.overflow = "";
  }
});

// Shop-Cart Navbar Open and Close

$("#shop-cart").addEventListener("click", () => {
  if ($("#section-pitsa-second").classList.contains("active")) {
    $("#section-pitsa-second").classList.remove("active");
  } else {
    $("#section-pitsa-second").classList.add("active");
  }
});

// Keyboard Code

this.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    $("#section-pitsa-second").classList.add("active");
    $("body").style.overflow = "";
  }
});

// Modal Open ad Close

$(".modal").addEventListener("click", (e) => {
  if (e.target == $(".modal")) {
    if (
      selectArray.length <= 0 ||
      sizesArray.length <= 0 ||
      productsArray.length <= 0
    ) {
      $(".modal").setAttribute("class", "modal");
      $("#check").setAttribute("class", "fa fa-x");
    }
  }
  if (
    selectArray.length != 0 &&
    sizesArray.length != 0 &&
    productsArray.length != 0
  ) {
    window.location.pathname = "index.html";
    $(".modal").setAttribute("class", "modal");
    $("#check").setAttribute("class", "fa fa-x");
    $("#modal").setAttribute("href", "index.html");
    $("body").style.overflow = "";
  }
});
