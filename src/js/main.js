import $ from "jquery";
import client_id from "./token.js";
import {musiccloud,searchCloud} from "./soundcloud.js";
import {extractInfo} from "./template.js";
// import {logData} from "./soundcloud.js"

function setPlaying (event) {
	var trackBlock = $(this);

	var song = trackBlock.data("stream") + `?client_id=${client_id}`;

	var player = $("audio")[0];

	console.log(trackBlock.data("stream"))

	player.src = song;
	player.play();

// 	if (target.id === "sound-grid"){
// 		// console.log(" You clicked me!")
// 		$("#imgsound")
// 	}

// 	// set currentSrc on the player to the new stream
// 	// make sure the audio is playing

}



musiccloud.then(extractInfo);

$(document)
	.on('click', '.cloud-grid', setPlaying)
	.on('submit', '#player', function(){
 		var input = $('#player input').val();
 		searchCloud(input).then(extractInfo);
 		return false;
	});

// when #player form is submitted, it runs an 
// anonymous function that stores the "search term"
// from the form's input and sends it to soundcloud
// using the 'searchCloud' method and then puts the 
// results that are returned from SC on the page using
// the 'extractInfo' method