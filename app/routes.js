/**
 * Draw routes.
 */
exports = module.exports = function(IoC) {

  this.post('/add', IoC.create('handlers/add'));
  this.post('/sub', IoC.create('handlers/sub'));
  
};

/**
 * DI annotations.
 */
exports['@require'] = [ '$container' ];
