// search start
let search = document.querySelector('.header-search__input');
search.onclick = function() {
  search.classList.toggle('header-search__input--active');
};
// search end

// distribution start
let distribution = document.querySelector('.distribution__email');
distribution.onclick = function() {
  distribution.classList.toggle('distribution__email--active');
};
// distribution end
