/**
 * Navbar spacer class
 * @param navbar (PSVNavBar) A PSVNavBar object
 * @param weight (int)
 */
function PSVNavBarSpacer(navbar, weight) {
  PSVComponent.call(this, navbar);

  this.weight = weight;

  this.create();

  this.container.classList.add('weight-' + (weight || 5));
}

PSVNavBarSpacer.prototype = Object.create(PSVComponent.prototype);
PSVNavBarSpacer.prototype.constructor = PSVNavBarSpacer;

PSVNavBarSpacer.className = 'psv-spacer';
