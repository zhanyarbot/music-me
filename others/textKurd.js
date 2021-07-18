const { MessageEmbed } = require("discord.js");

module.exports = {
   name: "tk",
   aliases: ["textkurd"],
   description: "Show text-kurdish",
  run: async (client, message, args) => {
    
    
    let replies = ["ghh","vh","ugc","hv","yv","ihv","8u","uh","hvyu","sbhjshs","jjbsgshsh"];

    let result =
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
