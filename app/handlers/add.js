var bodyParser = require('body-parser');


exports = module.exports = function(logger) {
  
  function add(req, res, next) {
    logger.debug('adding operands: ' + req.body.operands.join(', '));
    
    var operands = req.body.operands
      , result = 0
      , i, len;
    for (i = 0, len = operands.length; i < len; ++i) {
      result += operands[i];
    }
    res.send({ result: result });;
  }

  
  /**
   * POST /add
   *
   * CLI:
   *
   *     $ curl -X POST -H "Content-Type: application/json" --data "{\"operands\":[1,2]}" http://127.0.0.1:8080/add
   */
  return [ bodyParser.json(),
           add ];
  
}

/**
 * Component annotations.
 */
exports['@require'] = [ 'logger' ];
