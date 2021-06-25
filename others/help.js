
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


 invite ・ support(supp)・ uptime ・ prefix
 ping ・ invites・avatar ・ se
 listEmoji ・user

 *** <a:emoji_42:852963953104388096> |Fun commnads***


 topinvites(tinvites)・ setnick
 lock ・ unlock ban ・ unban
 clear・kick ・channelinfo
 vkick・addrole ・ roleremove
 slowmode・invites ・createchannel
deletechannel ・benner ・ count
deafend ・ undeafend ・rolebc
hightRole ・ rooms ・

*** <a:emoji_10:850608290308292628> | Gif Commands***

boy gif ・ love gif・girl gif ・ sad gif・meme 

*** <a:emoji_39:852897630605541417> | Game gif Commands***


boom ・ hug  ・ rps ・ kiss ・ slap ・slots

***<a:emoji_52:853130289491476561> | Game Commands***

rps・slots・stone・paper・scissors・kill

*** <a:emoji_55:856848714538287125> |Text Commands***

textkurd(tkurd)

***<a:emoji_51:853130142565793852> | Music Commands***
play ・ skip・lyrics
nowplaying・skipto・ stop
volume・nowplaying ・ resume
shuffle ・ search ・remove
queue ・ filter ・ radio・loob

**Links** <a:emoji_19:850624403293077504>
[SUPPORT](https://discord.gg/BCHan3ZxZr)       [INVITE](https://discord.com/api/oauth2/authorize?client_id=828921463348264982&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

