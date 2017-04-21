/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-fastboot-manifester',

  updateFastBootManifest: function(manifest) {
    manifest.vendorFiles.unshift('ember-cli-fastboot-manifester/cat.js');
    manifest.appFiles.push('ember-cli-fastboot-manifester/dog.js');

    return manifest;
  }
};
