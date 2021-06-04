const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h","HELP"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setTitle(`Help Menu`)
    .setDescription(`



-impostor | -simp | -rate | -icon | -avatar
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("YELLOW")
   message.react("<a:emoji_81:830444292111204382>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
