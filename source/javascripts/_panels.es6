const setHeight = _.throttle(() => {
  $('.Panel').each((index, panel) => {
    const $panel = $(panel);

    $panel.attr('style', null);

    const newHeight = Math.ceil($panel.height() / 20) * 20;
    $panel.height(newHeight);
  });
}, 300);

$(setHeight);
$(window).on('resize', setHeight);
$('img').on('load', setHeight);
/* TODO: this is a workaround for the fact that, when images are cached, their load event is not fired, so the setHeight function is not invoked.
 * It's not the workaround we deserve, but it's the workaround we need and can do quickly */
_.delay(setHeight, 1000);
_.delay(setHeight, 5000);
