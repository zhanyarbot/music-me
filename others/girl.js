const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "girl",
  aliases: ["g"],
  cooldown: 8,
  description: "** calms **",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://images-ext-2.discordapp.net/external/KybrYnfDUgrI7pCT8Wyq06jKm5qsXV_E8pxyKqhsodQ/https/media.discordapp.net/attachments/608711473652563968/844261575754121237/a_1c95c8cf5316236555087f55ec4347e2.gif `)
    .setTitle(`CLAMS is One`)
     .setDescription(``)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("<a:emoji_27:847407354005291018>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
