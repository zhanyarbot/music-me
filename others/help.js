
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
    .setTitle(`Panda Is One`)
    .setDescription(`
*** | Prefix bot*** 
***__>__***

<a:emoji_7:859099940499750912> ***| User Commands***


> invite ・ support(supp)・ uptime ・ prefix
> ping ・ invites・avatar ・ se ・ 
> listEmoji ・ user

 <a:Work:852558706708054056> ***|Fun commnads***


> topinvites(tinvites)・ setnick
> lock ・ unlock ban ・ unban
> clear・kick ・channelinfo
> vkick・addrole ・ roleremove
> slowmode・invites ・createchannel
> deletechannel ・benner ・ count
> deafend ・ undeafend ・rolebc
> hightRole ・ rooms ・

<:emoji_61:863458308219731978> ***| Gif Commands***


> boy gif ・ love gif・girl gif ・ sad gif・meme ・ 
>anime

***| photo Commnads ***


> pboy ・ pgirl ・ panime 

***| Game gif Commands***


> boom ・ hug  ・ rps ・ kiss ・ slap ・slots

<a:emoji_20:856127714804105216> ***| Game Commands***


> rps ・ slots・stone ・ paper ・ scissors ・ kill

<a:music:852559405718175744> ***| Music Commands***


> play ・ skip・lyrics
> nowplaying・skipto・ stop
> volume・nowplaying ・ resume
> shuffle ・ search ・remove
> queue ・ filter ・ radio・loob

**Links**
[SUPPORT](https://discord.gg/BCHan3ZxZr)       [INVITE](https://discord.com/api/oauth2/authorize?client_id=784303756925468713&permissions=8&scope=bot) [  website  ](https://calms-web-site.glitch.me/)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#ff0000")
   message.react("<:2_:863362568801222656>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

