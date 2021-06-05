const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "stats",
  aliases: ["stats"],
  cooldown: 8,
  description: "** Invite pore bot**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://media.discordapp.net/attachments/848815969233403934/850660018532777984/emoji_17.gif `)
    .setTitle(`CAlms is One`)
    .setDescription(`
<a:emoji_17:850611627321327617> OWNER BOT <@743887896481628190> <a:emoji_1:848805449155215391>
<a:emoji_16:850611586921398283>
<a:emoji_29:850653075055050772>[YOUTUBE](https://youtube.com/channel/UCU7jT6CLQvKIkyEzOuJFUPQ)
<a:emoji_16:850611586921398283>
<:g_:850633528697159710> [GITHUP](https://github.com/MAPXOR12)
<a:emoji_16:850611586921398283>
[SERVER SUPPORT](https://discord.gg/TTuqRTQrse)
<a:emoji_16:850611586921398283>
[SPONCAR SERVER](https://discord.gg/EpBZZYFre6)
<a:emoji_16:850611586921398283>
[INVITEBOT](https://discord.com/oauth2/authorize?client_id=828921463348264982&permissions=70282305&scope=bot)`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("<a:emoji_27:847407354005291018>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
