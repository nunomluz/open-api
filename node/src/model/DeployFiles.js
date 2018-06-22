/**
 * Netlify's API definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NetlifysApiDefinition) {
      root.NetlifysApiDefinition = {};
    }
    root.NetlifysApiDefinition.DeployFiles = factory(root.NetlifysApiDefinition.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeployFiles model module.
   * @module model/DeployFiles
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeployFiles</code>.
   * @alias module:model/DeployFiles
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DeployFiles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeployFiles} obj Optional instance to populate.
   * @return {module:model/DeployFiles} The populated <code>DeployFiles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('files')) {
        obj['files'] = ApiClient.convertToType(data['files'], Object);
      }
      if (data.hasOwnProperty('draft')) {
        obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
      }
      if (data.hasOwnProperty('async')) {
        obj['async'] = ApiClient.convertToType(data['async'], 'Boolean');
      }
      if (data.hasOwnProperty('functions')) {
        obj['functions'] = ApiClient.convertToType(data['functions'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} files
   */
  exports.prototype['files'] = undefined;
  /**
   * @member {Boolean} draft
   */
  exports.prototype['draft'] = undefined;
  /**
   * @member {Boolean} async
   */
  exports.prototype['async'] = undefined;
  /**
   * @member {Object} functions
   */
  exports.prototype['functions'] = undefined;



  return exports;
}));


