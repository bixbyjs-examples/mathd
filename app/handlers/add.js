exports = module.exports = function(logger) {
  
  function add(req, res, next) {
    console.log('ADD STUFF');
    
    res.statusCode = 202;  // Accepted
    res.end();
  }

  
  /**
   * POST /add
   *
   * CLI:
   *
   *     $ curl -X POST -H "Content-Type: application/json" --data "{"operands":[1,2]}" http://127.0.0.1:8080/add
   */
  return [ add ];
  
}

/**
 * Component annotations.
 */
exports['@require'] = [ 'logger' ];
