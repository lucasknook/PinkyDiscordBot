const Discord = require("discord.js");
const client = new Discord.Client();
const music = require("discord.js-music-v11");
const fs = require("fs");

const config = require("./node_modules/discord.js-music-v11/config.json");
let a = 0;

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (message.content.startsWith(config.Prefix + "whatdoestheoscarsay?")) {
        message.channel.send("I AGREE!!!");
    }

    if(message.content.startsWith(config.Prefix + "prefix")) {
        if(message.author.id !== config.ownerID) {
            message.channel.send("Unauthorised to change prefix, please ask LucasKnook for permission!");
            return;
        }
        // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
        let newPrefix = message.content.split(" ").slice(1, 2)[0];

        // change the configuration in memory
        config.Prefix = newPrefix;

        // Now we have to save the file.
        fs.writeFile("./node_modules/discord.js-music-v11/config.json", JSON.stringify(config), (err) => console.error(err));
        message.channel.send("prefix changed to: " + config.Prefix);
    }

    if(message.content.startsWith("Reset_Prefix")) {
        if(message.author.id !== config.ownerID) {
            message.channel.send("Unauthorised to reset prefix to default (!), please ask LucasKnook for permission!");
            return;
        }

        config.Prefix = "!";
        fs.writeFile("./node_modules/discord.js-music-v11/config.json", JSON.stringify(config), (err) => console.error(err));
        message.channel.send("Prefix changed to default (!)");
    }
    if (message.content.startsWith(config.Prefix + "secret")) {
        if(a == 4){
            message.channel.send("Ok, you got me... https://www.youtube.com/watch?v=s8sQ5pLwRIQ");
            a = 0;
        } else {
            message.channel.send("DID YOU REALLY FCKING THINK THAT THERE WOULD BE A SECRET YOU PIECE OF SHEIT?!?!??!?");
            a += 1;
        }
    }

    if (message.content.startsWith(config.Prefix + "test")) {
        message.channel.send("test");
    }
});

client.login(process.env.BOT_TOKEN);

music(client);
