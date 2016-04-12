var reverseForEach = function(array, callback, scope) {
  for (var i = array.length - 1, x = 0; i >= 0; --i, ++x) {
    callback.call(scope, array[i], x);
  }
};

class BlueFlowerAnim {
  constructor(prefix = null) {
    this.prefix = prefix || "blue";
    this.svg = document.getElementById(this.prefix + '-Anim-blueFlower');
    this.petals = this.svg.querySelectorAll('[id*="petal"]');
    this.easing = [.53,.12,.49,1.53];
  }

  reset() {
    Velocity(this.petals, {
      transformOriginX: '50%',
      transformOriginY: '100%',
      scale: 0,
    }, {
      duration: 0,
    });
  }

  animate() {
    this.reset();
    reverseForEach(this.petals, (petal, index) => {
      Velocity(petal, {
        scale: [1, 0],
      }, {
        duration: 600,
        delay: 50 * index,
        easing: this.easing,
      });
    });
  }
}
