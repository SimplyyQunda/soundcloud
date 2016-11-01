import $ from "jquery";
import client_id from "./token.js";


$.ajaxSetup({
	data: {
		client_id: client_id,
		limit: 400
	}
});

  var  musiccloud = $.ajax({
    url: "https://api.soundcloud.com/tracks"
	});

// function extractInfo (data) {
// 	console.log(data);
// };

 var searchCloud = function (input){
 	return $.ajax ({
 		url: "https://api.soundcloud.com/tracks",
 		data: {
 			q: input
 		}
 	});
 }

 export {musiccloud, searchCloud};
