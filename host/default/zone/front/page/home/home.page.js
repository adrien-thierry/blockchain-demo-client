
function home()
{
  this.code = function(req, res)
  {
    res.end(this.view['home']);
  }
}

module.exports = home;
