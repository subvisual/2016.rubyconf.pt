const toggleNav = (event) => {
  $('#Overlay').toggleClass('is-open');
  $('#Burger').toggleClass('is-open');
}

$(() => {
  $('#Burger').on('click', toggleNav);
  $('#Overlay').on('scroll', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
});

