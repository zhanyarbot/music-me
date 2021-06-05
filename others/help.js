const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands rox**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(``)
    .setTitle(`Rox Is One`)
    .setDescription(`
*** <a:emoji_30:850655693937967144> | User Commands***
${PREFIX}invite  -  ${PREFIX}support  -  ${PREFIX}about
${PREFIX}uptime  -  ${PREFIX}ping  -  ${PREFIX}invites
${PREFIX}avatar  -  ${PREFIX}se  -  ${PREFIX}serverinfo
${PREFIX}userinfo  -  ${PREFIX}suggstion  -  ${PREFIX}prefix
•━━━━━━ ✽ • ✽ ━━━━━━•
***<:emoji_12:842708529717968896> | Music Commands***
${PREFIX}play  -  ${PREFIX}skip  -  ${PREFIX}skipto
${PREFIX}nowplaying  -  ${PREFIX}stop  -  ${PREFIX}volume
${PREFIX}resume  -  ${PREFIX}shuffle  -  ${PREFIX}search
${PREFIX}remove  -  ${PREFIX}queue  -  ${PREFIX}filter
${PREFIX}radio  -  ${PREFIX}loop
•━━━━━━ ✽ • ✽ ━━━━━━•
***<a:emoji_22:850626710352166923> | Gif Commands***
${PREFIX}boy  -  ${PREFIX}girl  -  ${PREFIX}love
${PREFIX}sad  -  ${PREFIX}meme  -  ${PREFIX}baby
${PREFIX}smoking  -  ${PREFIX}animal  -  ${PREFIX}anime
${PREFIX}black  -  ${PREFIX}red  -  ${PREFIX}white
•━━━━━━ ✽ • ✽ ━━━━━━•
*** <a:emoji_6:837819751677296670> | SecurtyCommands***
${PREFIX}lock  -  ${PREFIX}unlock  -  ${PREFIX}slowmode
${PREFIX}ban  -  ${PREFIX}unban  -  ${PREFIX}bans
${PREFIX}mute  -  ${PREFIX}unmue  -  ${PREFIX}giveaway
${PREFIX}say  -  ${PREFIX}embed  -  ${PREFIX}vkick
${PREFIX}clear  -  ${PREFIX}createchannel  -  ${PREFIX}deletechannel
•━━━━━━ ✽ • ✽ ━━━━━━•
**Links**<a:emoji_4:849925496723603488>
[support](https://discord.gg/cWvV7xzRnP)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=843898599217168394&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#740000")
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
