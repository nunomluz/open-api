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
    root.NetlifysApiDefinition.DeployKey = factory(root.NetlifysApiDefinition.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeployKey model module.
   * @module model/DeployKey
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeployKey</code>.
   * @alias module:model/DeployKey
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DeployKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeployKey} obj Optional instance to populate.
   * @return {module:model/DeployKey} The populated <code>DeployKey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('public_key')) {
        obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} public_key
   */
  exports.prototype['public_key'] = undefined;
  /**
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;



  return exports;
}));


