class TallAnim {
  constructor(prefix) {
    this.prefix = prefix || "tall"
    this.svg = document.getElementById(this.prefix + '-Anim-ticketBranches');
    this.branches = this.svg.querySelectorAll(this.selectors.branches);
    this.miniBranches = this.svg.querySelectorAll(this.selectors.miniBranches);
    this.leafs = this.svg.querySelectorAll(this.selectors.leafs);
    this.fruits = this.svg.querySelectorAll(this.selectors.fruits);
    this.flowers = this.svg.querySelectorAll(this.selectors.flowers);
    this.elasticEasing = [.53,.12,.49,1.53];
    this.durationMultiplier = 0.4;
  }

  get selectors() {
    return {
      branches: `path[id^=${this.prefix}-branch]`,
      miniBranches: `path[id^=${this.prefix}-miniBranch], path[id^=${this.prefix}-minibranch]`,
      leafs: `path[id^=${this.prefix}-leaf]`,
      fruits: `[id^=${this.prefix}-fruitWrapper] circle[id^=${this.prefix}-fruit], [id^=${this.prefix}-fruitWrapper] path[id^=${this.prefix}-fruit]`,
      flowers: `g[id^=${this.prefix}-flower] ellipse`,
    };
  }

  reset() {
    Anim.hidePaths(this.branches);
    Anim.hidePaths(this.miniBranches);
    Anim.hideShapes(this.leafs, { transformOriginX: '50%', transformOriginY: '0%' });
    Anim.hideShapes(this.fruits, { transformOriginX: '50%', transformOriginY: '50%' });
    Anim.hideShapes(this.flowers, { transformOriginX: '50%', transformOriginY: '50%' });
  }

  animateBranches() {
    Anim.revealPaths(this.branches, (branch, index) => this.branchData(index));
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
      branchDelays: [2000, 0],

      miniBranchDelays: [
        700, 950, // bottom middle
        1500, 1650, // bottom top
        2200, // top bottom
        100, 150, // bottom bottom
        2800, // top middle
        3200, // top top
      ],

      leafDelays: [
        400, 470, 500, 700, // bottom bottom
        1000, 1150, // bottom middle
        2300, 2400, // top bottom
        2800, 3000, 3100, // top middle
        3300, 3300, // top top
      ],

      fruitDelays: [
        550, 480, // bottom
        3000, 3500, // top
      ],

      flowerDelays: [
        1300, 1800, 2000, 2200, 2400, // flower 1
        1500, 2000, 2200, 2400, 2600, // flower 2
        1700, 2200, 2400, 2600, 2800, // flower 3
        2500, 3000, 3200, 3400, 3600, // flower 4
        3500, 4000, 4200, 4400, 4600, // flower 5
      ]
    };
  }

  branchData(index) {
    return { duration: 2000 * this.durationMultiplier, delay: this.params.branchDelays[index], easing: 'linear' };
  }

  miniBranchData(index) {
    return { duration: 600 * this.durationMultiplier, delay: this.params.miniBranchDelays[index], easing: 'ease-out' };
  }

  leafData(index) {
    return { duration: 600 * this.durationMultiplier, delay: this.params.leafDelays[index], easing: 'linear' };
  }

  fruitData(index) {
    return { duration: 1000 * this.durationMultiplier, delay: this.params.fruitDelays[index], easing: this.elasticEasing };
  }

  flowerData(index) {
    return { duration: 800 * this.durationMultiplier, delay: this.params.flowerDelays[index], easing: this.elasticEasing };
  }
}
