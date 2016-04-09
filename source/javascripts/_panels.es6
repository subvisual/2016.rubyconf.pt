const setHeight = () => {
  $('.Panel').each((index, panel) => {
    const $panel = $(panel);

    $panel.attr('style', null);

    const newHeight = Math.ceil($panel.height() / 20) * 20;
    $panel.height(newHeight);
  });
};

$(setHeight);
$(window).on('resize', _.throttle(setHeight, 300));
