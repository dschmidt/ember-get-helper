/* jshint node: true */
'use strict';

var VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-get-helper',

  init: function() {
    var checker = new VersionChecker(this);
    this._checkerForEmber = checker.for('ember', 'bower');
  },

  treeFor: function() {
    if (this._checkerForEmber.lt('2.0.0-beta.1')) {
      return this._super.treeFor.apply(this, arguments);
    } else {
      console.warn('ember-get-helper is not required for Ember 2.0.0 and later (a default `get` helper is included with Ember), please remove from your `package.json`.');
    }
  }
};
