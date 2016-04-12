$(function() {
  const controller = new ScrollMagic.Controller();

  const velocityAnimationOnScroll = function(element, prefixes, animatorClass) {
    const animators = _.map(prefixes, (prefix) => new animatorClass(prefix));
    _.each(animators, (animator) => animator.reset());

    new ScrollMagic.Scene({ triggerElement: element }).
      addTo(controller).
      on("enter", () => {
        $el = $(element);
        if ($el.data('animated')) {
          return;
        }
        $el.attr('data-animated', true);
        _.each(animators, (animator) => animator.animate());
      });
  }


  velocityAnimationOnScroll("#trigger-hero", ["hero"], HeroAnim);
  velocityAnimationOnScroll("#trigger-tall", ["tall1", "tall2"], TallAnim);
  velocityAnimationOnScroll("#trigger-blueFlower", ["blue1", "blue2"], BlueFlowerAnim);
})
