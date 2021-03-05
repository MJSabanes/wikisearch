const Discord = require('discord.js');
const client = new Discord.Client();
client.user.setUsername('GO!-Bot')
client.user.setActivity('Hanging with Carlos and Alexis')
require('dotenv').config()

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content.startsWith('[[') && msg.content.endsWith(']]')) {
     var l = msg.content.length;
     var article = msg.content.slice(2, l-2);
     article = article.split(" ").join("_");
     const rad_reply = "Hi, I'm Rad, and I want to tell you about https://tfwiki.net/wiki/" + article;
     msg.channel.send(rad_reply);
 }
});

client.login(process.env.TFWIKISEARCH_BOT_TOKEN)
