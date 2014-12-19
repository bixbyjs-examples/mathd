/**
 * Module dependencies.
 */
var bodyParser = require('body-parser');


exports = module.exports = function(logger) {
  
  function sub(req, res, next) {
    logger.debug('subtracting operands: ' + req.body.operands.join(', '));
    
    var operands = req.body.operands
      , result = operands[0]
      , i, len;
    for (i = 1, len = operands.length; i < len; ++i) {
      result -= operands[i];
    }
    res.send({ operands: operands, result: result });
  }

  
  /**
   * POST /sub
   *
   * CLI:
   *
   *     $ curl -X POST -H "Content-Type: application/json" --data "{\"operands\":[1,2]}" http://127.0.0.1:8080/sub
   */
  return [ bodyParser.json(),
           sub ];
  
}

/**
 * Component annotations.
 */
exports['@require'] = [ 'logger' ];
