/**
 * Draw routes.
 */
exports = module.exports = function(IoC) {

  this.post('/add', IoC.create('handlers/add'));
  
};

/**
 * DI annotations.
 */
exports['@require'] = [ '$container' ];
