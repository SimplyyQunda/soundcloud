import $ from "jquery";
import client_id from "./token.js";


$.ajaxSetup({
	data: {
		client_id: client_id
	}
});

  var  musiccloud = $.ajax({
    url: "https://api.soundcloud.com/tracks"
	});

function extractInfo (data) {
	console.log(data);
};

 

 export {musiccloud,extractInfo};