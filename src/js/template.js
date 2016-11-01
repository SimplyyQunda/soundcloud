import $ from "jquery";

function extractInfo (data) {
	
$(".results").empty();
for (var count = 0; count < data.length; count++) {
	var cloud = data[count];
	console.log(count);

	// console.log(cloud);

	var title = cloud.title;
	var artwork = cloud.artwork_url;
	var user = cloud.user.username;
	var stream = cloud.stream_url;

	var soundcloudBlock = `
	<div class="cloud-grid" data-stream="${stream}" data-genre="Hip-Hop">
		<div class="images">
		<img src="${cloud.artwork_url || cloud.user.avatar_url}">
		</div>

		<div class="titleblock">
		<span> ${cloud.title} </span>
		</div>

		<div class="name">
		<span> ${cloud.user.username} </span>
		</div>

	</div>

	`;
	$(".results").append(soundcloudBlock);
	


}



};

export {extractInfo};