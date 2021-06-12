
const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands Pinky**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(``)
    .setTitle(`Calms Is One`)
    .setDescription(`

*** <a:emoji_50:853130123585781771> | Prefix bot*** 
***_+_***

***<a:emoji_30:850655693937967144> | User Commands***
<a:emoji_16:850611586921398283>
${PREFIX}invite - ${PREFIX}support(supp)
 ${PREFIX}uptime
${PREFIX}ping - ${PREFIX}invites
${PREFIX}avatar - ${PREFIX}se
<a:emoji_16:850611586921398283>
***<a:emoji_51:853130142565793852> | Music Commands***
<a:emoji_16:850611586921398283>
${PREFIX}play - ${PREFIX}skip
${PREFIX}skipto - ${PREFIX}nowplaying
${PREFIX}stop - ${PREFIX}volume
${PREFIX}nowplaying - ${PREFIX}resume
${PREFIX}shuffle - ${PREFIX}search
${PREFIX}remove - ${PREFIX}queue 
${PREFIX}filter - ${PREFIX}radio
${PREFIX}loop - ${PREFIX}lyrics
<a:emoji_16:850611586921398283>
*** <a:emoji_10:850608290308292628> | Gif Commands***
<a:emoji_16:850611586921398283>
*${PREFIX}boy* - *${PREFIX}gifblack*
*${PREFIX}smoking* - *${PREFIX}girl*
*${PREFIX}sad* - 
<a:emoji_16:850611586921398283>
 ***<a:emoji_42:852963953104388096> |Midrator commnads***
<a:emoji_16:850611586921398283>
${PREFIX}prefix - ${PREFIX}giveway
${PREFIX}lock - ${PREFIX}unlock 
${PREFIX}ban - ${PREFIX}unban
${PREFIX}slowmode - ${PREFIX}invites
**Links** <a:emoji_19:850624403293077504>
<a:emoji_1:848805449155215391>[SUPPORT](https://discord.gg/BCHan3ZxZr)   <a:emoji_13:850610633618489344>     [INVITE](https://discord.com/api/oauth2/authorize?client_id=828921463348264982&permissions=8&scope=bot) <a:emoji_20:850624420102930444>
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

