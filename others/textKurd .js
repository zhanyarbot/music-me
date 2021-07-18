
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "text",
  aliases: [textkurd],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {
    
    
    let replies = ["ghh","","","","","","","","","",""];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(replies[result]).then(message => {
			message.react('🥺').then(r => {
				message.react('🌹');
           });
          });
      }
}
