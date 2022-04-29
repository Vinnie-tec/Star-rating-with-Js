const ratings = {
  futa: 4.2,
  Akungba: 3.4,
  unilag: 3.8,
  uniben: 3.3,
  oau: 3.5,
  eksu: 3.8,
};

// total stars
const totalStar = 5;

document.addEventListener("DOMContentLoaded", getRatings);

// form element
const institutionSelect = document.querySelector("#institution-select");
const ratingControl = document.getElementById("rating-control");
const btn = document.querySelector(".btn");

// init institution
let institution;

institutionSelect.addEventListener("change", (e) => {
  institution = e.target.value;
  // console.log(institution)
  // enabling rating control

  ratingControl.disabled = false;
  btn.disabled = false;
  ratingControl.value = ratings[institution];
});

// rating control change
btn.addEventListener("click", (e) => {
  const rating = ratingControl.value;

  if (rating > 5) {
    alert("Please rate 1 - 5!");
    return;
  }
  // change rating
  ratings[institution] = rating;

  getRatings();
});

// get rating
function getRatings() {
  for (let rating in ratings) {
    // get percentage
    const starPercentage = (ratings[rating] / totalStar) * 100;

    // rounding up to nearest 10
    const starPercentageRoundUp = `${Math.round(starPercentage / 10) * 10}%`;
    // console.log(starPercentage, starPercentageRoundUp);

    // set the width of stars-inner to percentage
    document.querySelector(`.${rating} .stars-inner`).style.width =
      starPercentageRoundUp;
  }
}
