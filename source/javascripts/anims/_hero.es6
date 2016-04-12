class HeroAnim {
  constructor() {
    this.svg = document.getElementById('hero-Anim-branches');
    this.branches = this.svg.querySelectorAll(this.selectors.branches);
    this.miniBranches = this.svg.querySelectorAll(this.selectors.miniBranches);
    this.leafs = this.svg.querySelectorAll(this.selectors.leafs);
    this.fruits = this.svg.querySelectorAll(this.selectors.fruits);
    this.flowers = this.svg.querySelectorAll(this.selectors.flowers);
    this.elasticEasing = [.53,.12,.49,1.53];
    this.durationMultiplier = 0.8;
  }

  get selectors() {
    return {
      branches: 'path[id^=hero-branch]',
      miniBranches: 'path[id^=hero-miniBranch], path[id^=hero-minibranch]',
      leafs: 'path[id^=hero-leaf]',
      fruits: 'ellipse[id^=hero-fruit], circle[id^=hero-fruit]',
      flowers: 'g[id^=hero-flower] ellipse',
    };
  }

  reset() {
    Anim.hidePaths(this.branches);
    Anim.hidePaths(this.miniBranches);
    Anim.hideShapes(this.leafs, { transformOriginX: '50%', transformOriginY: '100%' });
    Anim.hideShapes(this.fruits, { transformOriginX: '50%', transformOriginY: '50%' });
    Anim.hideShapes(this.flowers, { transformOriginX: '50%', transformOriginY: '50%' });
  }

  animateBranches() {
    Anim.revealPaths(this.branches, { duration: 2000 * this.durationMultiplier, easing: 'linear' });
    Anim.revealPaths(this.miniBranches, (miniBranch, index) => this.miniBranchData(index));
    Anim.revealShapes(this.leafs, (leaf, index) => this.leafData(index));
    Anim.revealShapes(this.fruits, (fruit, index) => this.fruitData(index));
    Anim.revealShapes(this.flowers, (flower, index) => this.flowerData(index));
  }

  animate() {
    this.reset();
    this.animateBranches();
  }

  get params() {
    return this._variableParams = this._variableParams || {
      miniBranchDelays: [
        500, 500, 1700, 1000,         // some of the flower miniBranches
        500, 1400, 1700, 2000, // left side
        1800, 1800, 1800, 1800, // center
        2000, 1700, 1400, 500, // right side
        1000, 1700, // another flower miniBranch
      ],

      leafDelays: [
        2000, 1800, 1800, 1600, 500, // top left
        500, 800, 1800, 1500, 2000,  // bottom left
        2000, 1800, 1500, 1700, 800, // center left
        1400, 1700, 1800, 2000,      // center left
        2000, 1500, 1800, 800, 500,  // bottom right
        500, 1600, 1800, 1800, 2000, 1900, // top right
      ],

      fruitDelays: [
        2200, 1800, 700, // fruits 1 2 3
        2100, 1800, 1500, // fruit 4
        2300, 2000, 1700, // fruit 5
        2100, 1750, 1700, 2150, // fruits 7 8 9 10
        2300, 2000, 1700, // fruit 12
        2100, 1800, 1500, // fruit 13
        700, 1800, 2200, // fruits 14 15 16
      ],

      fruitDurations: [
        1000, 1000, 1000, // fruits 1 2 3
        1100, 800, 500, // fruit 4
        1100, 800, 500, // fruit 5
        1000, 1000, 1000, 1000, // fruits 7 8 9 10
        1100, 800, 500, // fruit 12
        1100, 800, 500, // fruit 13
        1000, 1000, 1000, // fruits 14 15 16
      ],

      flowerDelays: [
        1900, 2500, 2700, 2900, 3100, // flower 1
        800, 2300, 2700, 2300, 2900, // flower 2
        2000, 2500, 2700, 2900, 3100, // flower 3
        2000, 2500, 2700, 2900, 3100, // flower 4
        800, 2350, 2550, 2750, 2950, // flower 5
        1900, 2500, 2700, 2900, 3100, // flower 6
      ]
    };
  }

  miniBranchData(index) {
    return { duration: 600 * this.durationMultiplier, delay: this.params.miniBranchDelays[index], easing: 'ease-out' };
  }

  leafData(index) {
    return { duration: 600 * this.durationMultiplier, delay: this.params.leafDelays[index], easing: 'linear' };
  }

  fruitData(index) {
    return { duration: this.params.fruitDurations[index] * this.durationMultiplier, delay: this.params.fruitDelays[index], easing: this.elasticEasing };
  }

  flowerData(index) {
    return { duration: 800 * this.durationMultiplier, delay: this.params.flowerDelays[index], easing: this.elasticEasing };
  }
}
