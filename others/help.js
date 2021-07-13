
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
    .setTitle(`AenGo Is One`)
    .setDescription(`
*** | Prefix bot*** 
***__+__***

*** | User Commands***


 invite ・ support(supp)・ uptime ・ prefix
 ping ・ invites・avatar ・ se
 listEmoji ・user

 ***|Fun commnads***


 topinvites(tinvites)・ setnick
 lock ・ unlock ban ・ unban
 clear・kick ・channelinfo
 vkick・addrole ・ roleremove
 slowmode・invites ・createchannel
deletechannel ・benner ・ count
deafend ・ undeafend ・rolebc
hightRole ・ rooms ・

***| Gif Commands***

boy gif ・ love gif・girl gif ・ sad gif・meme 

***  | Game gif Commands***


boom ・ hug  ・ rps ・ kiss ・ slap ・slots

*** | Game Commands***

rps・slots・stone・paper・scissors・kill

*** |Text Commands***

textkurd(tkurd)

***| Music Commands***
play ・ skip・lyrics
nowplaying・skipto・ stop
volume・nowplaying ・ resume
shuffle ・ search ・remove
queue ・ filter ・ radio・loob

**Links**
[SUPPORT](https://discord.gg/BCHan3ZxZr)       [INVITE](https://discord.com/api/oauth2/authorize?client_id=784303756925468713&permissions=8&scope=bot) [  website  ](https://calms-web-site.glitch.me/)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#ff0000")
   message.react("<:2_:863362568801222656>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

