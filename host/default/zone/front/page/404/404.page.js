
function _404()
{
  this.code = function(req, res)
  {
    res.end(JSON.stringify({state: false, code:404, date: new Date(), message: "Unknown route"}));
  }
}

module.exports = _404;
