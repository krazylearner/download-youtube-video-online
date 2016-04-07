var ytdl = require('ytdl-core');
ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
	.pipe(require('fs').createWriteStream('video.flv'))
	.on('error',function(err){
		console.log(err);
	});



