var hostConf=
{
	"state": true,
	"pos": 0,
	"default_zone": "front", // default zone for /
	"default_page": "home", // default view for /
	"404": "/404/",
  "host":
  {
		"*": "all",
  },

  "app":
  {
		"store": "Store blockchain",
		"seal": "Seal block",
		"account": "Account management",
  },
}
module.exports = hostConf
