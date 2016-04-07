var ytdl = require('ytdl-core');


var  Converter = function(){
	
} ;

Converter.urlToVideo = function(url){
	
	var ytVideoSream = ytdl('http://www.youtube.com/watch?v=A02s8omM_hI');
	return ytVideoSream;
};