
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
    .setImage(`https://media.discordapp.net/attachments/848454202514079764/854642997894971392/image0.gif `)
    .setTitle(`Calms Is One`)
    .setDescription(`

*** <a:emoji_50:853130123585781771> | Prefix bot*** 
***__+__***

***<a:emoji_30:850655693937967144> | User Commands***


${PREFIX}invite - ${PREFIX}support(supp)
 ${PREFIX}uptime - ${PREFIX}prefix
${PREFIX}ping - ${PREFIX}invites
${PREFIX}avatar - ${PREFIX}se


 *** <a:emoji_42:852963953104388096> |Fun commnads***


${PREFIX}prefix  ${PREFIX}setnick
${PREFIX}lock  ${PREFIX}unlock 
${PREFIX}ban  ${PREFIX}unban
${PREFIX}clear ${PREFIX}kick
${PREFIX}vkick ${PREFIX}addrole ${PREFIX}roleremove
${PREFIX}slowmode ${PREFIX}invites
${PREFIX}topinvites(tinvites)


*** <a:emoji_10:850608290308292628> | Gif Commands***

${PREFIX}boy gif - ${PREFIX}love gif
${PREFIX}girl gif - ${PREFIX}sad gif
${PREFIX}meme 

*** <a:emoji_39:852897630605541417> | Game Commands***


${PREFIX}boom ${PREFIX}hug ${PREFIX}kess


***<a:emoji_51:853130142565793852> | Music Commands***
${PREFIX}play - ${PREFIX}skip
${PREFIX}skipto - ${PREFIX}nowplaying
${PREFIX}stop - ${PREFIX}volume
${PREFIX}nowplaying - ${PREFIX}resume
${PREFIX}shuffle - ${PREFIX}search
${PREFIX}remove - ${PREFIX}queue 
${PREFIX}filter - ${PREFIX}radio
${PREFIX}loop - ${PREFIX}lyrics

**Links** <a:emoji_19:850624403293077504>
[SUPPORT](https://discord.gg/BCHan3ZxZr)       [INVITE](https://discord.com/api/oauth2/authorize?client_id=828921463348264982&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

