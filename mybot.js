const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const music = require('discord.js-music-v11');
const fs = require("fs")
var a = 0;


client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
 	if (message.content.startsWith(config.prefix + "whatdoestheoscarsay?")) {
    		message.channel.send("I AGREE!!!");
  	}

 	if(message.content.startsWith(config.prefix + "prefix")) {
 	if(message.author.id !== config.ownerID) {
 		message.channel.send("Unauthorised to change prefix, please ask LucasKnook for permission!");
 		return;
 	}

  	// Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
  	let newPrefix = message.content.split(" ").slice(1, 2)[0];

  	// change the configuration in memory
  	config.prefix = newPrefix;

  	// Now we have to save the file.
  	fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  	message.channel.send("prefix changed to: " + config.prefix);
  	}
  	if(message.content.startsWith("Reset_Prefix")) {
  	if(message.author.id !== config.ownerID) {
  		message.channel.send("Unauthorised to reset prefix to default (!), please ask LucasKnook for permission!");
  		return;
  	}
  	let newPrefix = "!"
  	config.prefix = newPrefix;
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
    message.channel.send("Prefix changed to default (!)");
  	}
	 	if (message.content.startsWith(config.prefix + "secret")) {
			if(a != 4){
    		message.channel.send("DID YOU REALLY FCKING THINK THAT THERE WOULD BE A SECRET YOU PIECE OF SHEIT?!?!??!?");
			a = a + 1
			return;
			}
			if(a == 4){
    		message.channel.send("Ok, you got me... https://www.youtube.com/watch?v=s8sQ5pLwRIQ");
			a = 0
			return;
			}
  	}
});
music(client);
client.login(process.env.BOT_TOKEN);