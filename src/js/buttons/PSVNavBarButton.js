/**
 * Navigation bar button class
 * @param navbar (PSVNavBar) A PSVNavBar object
 */
function PSVNavBarButton(navbar) {
  PSVComponent.call(this, navbar);

  if (this.constructor.id) {
    this.id = this.constructor.id;
  }

  this.enabled = true;
}

PSVNavBarButton.prototype = Object.create(PSVComponent.prototype);
PSVNavBarButton.prototype.constructor = PSVNavBarButton;

/**
 * Creates the button
 */
PSVNavBarButton.prototype.create = function() {
  PSVComponent.prototype.create.call(this);

  if (this.constructor.icon) {
    this.container.innerHTML = PhotoSphereViewer.ICONS[this.constructor.icon];
  }

  this.container.addEventListener('click', function() {
    if (this.enabled) {
      this._onClick();
    }
  }.bind(this));
};

/**
 * Changes the active state of the button
 * @param active (boolean) true if the button should be active, false otherwise
 * @return (void)
 */
PSVNavBarButton.prototype.toggleActive = function(active) {
  PSVUtils.toggleClass(this.container, 'active', active);

  if (this.constructor.iconActive) {
    this.container.innerHTML = PhotoSphereViewer.ICONS[active ? this.constructor.iconActive : this.constructor.icon];
  }
};

/**
 * Disables the button
 */
PSVNavBarButton.prototype.disable = function() {
  this.container.classList.add('disabled');

  this.enabled = false;
};

/**
 * Enables the button
 */
PSVNavBarButton.prototype.enable = function() {
  this.container.classList.remove('disabled');

  this.enabled = true;
};

/**
 * Action when the button is clicked
 */
PSVNavBarButton.prototype._onClick = function() {

};
