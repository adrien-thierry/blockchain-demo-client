var wf = WF();
var frontConf =
{
	'uri': 'front',
	'state': true,
	'pos': 0,
	'shared': wf.CONF['DEFAULT_SHARED_FOLDER'],
	'cache': [".js"] // '*' => cache all files
}

module.exports = frontConf;
