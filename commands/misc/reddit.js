const { getPost } = require('random-reddit');

async function redditPost(messageText) {
	const nsfw = false;
	if(message.channel.nsfw){
		nsfw = true;
	}
	let options = {
		imageOnly: true,
		allowNSFW: nsfw
	 };
	const image = await getPost(messageText, options);
	console.log(image);
	return image;
}

async function sendImage(message, messageText) {
	const image = await redditPost(messageText);
	if(image.length > 0) {
		return message.channel.send(image);
	}
	return message.channel.send("This subreddit does not exist.");
}

module.exports = {
	name: "reddit",
	description: "Sends a random image from a specified subreddit",

	execute(message, args) {
		var messageText = "cats";
		if(args.length > 0) {
			var messageText = String(args[0]);
		}
		sendImage(message, messageText);
	},
};