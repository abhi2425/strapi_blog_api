'use strict';

/**
 * solution-json service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::solution-json.solution-json');
