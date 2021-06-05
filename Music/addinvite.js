const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "support",
  aliases: ["supp"],
  cooldown: 8,
  description: "** Invite pore bot**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://media.discordapp.net/attachments/848121416696070164/848210376364654602/image0.gif`)
    .setTitle(`CAlms is One`)
    .setDescription(`
<a:emoji_1:848805449155215391>[  SUPPORT  ](https://discord.gg/mAp4pC7VAv) <a:emoji_20:850624420102930444>
<a:emoji_16:850611586921398283>
<a:emoji_1:848805449155215391>[  INVITE  ](https://discord.com/oauth2/authorize?client_id=828921463348264982&permissions=70282305&scope=bot) <a:emoji_20:850624420102930444>
<a:emoji_16:850611586921398283> `)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("<a:emoji_27:847407354005291018>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
