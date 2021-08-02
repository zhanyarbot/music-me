
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
    .setTitle(`Evil Bot Commands`)
    .setDescription(`
*** | Prefix bot*** 
***__>__***

<:emoji_94:852672917031616522> ***| User Commands***
> invite ・ support(supp)・ uptime ・ prefix
> ping ・ invites・avatar ・ se ・ 
> listEmoji ・ user

<:emoji_80:852672550155976754> ***|Moderation Commands***
> topinvites(tinvites) ・ setnick
> lock ・ unlock ・ ban ・ unban
> clear ・ kick ・ channelinfo
> vkick ・ addrole ・ roleremove
> slowmode ・ invites ・ createchannel
> deletechannel ・ benner ・ count
> deafend ・ undeafend ・ rolebc
> hightRole ・ rooms ・

<:emoji_61:863458308219731978> ***| Gif Commands***
> boy gif ・ love gif・girl gif ・ sad gif ・ meme ・ 
> anime

<:emoji_79:852672528466968578> ***| photo Commnads ***
> pboy ・ pgirl ・ panime 

<a:emoji_90:842129191301677107> ***| Game Commands***
> stone ・ scissors ・ kill ・ slots ・ rps

<:emoji_78:870361473107517471> ***| Funny Commands***
> boom ・ hug ・ paper ・ kiss ・ slap

<:emoji_85:852672706881388564> ***| Music Commands***
> play ・ skip ・ lyrics
> nowplaying ・ skipto ・ stop
> volume ・ nowplaying ・ resume
> shuffle ・ search ・ remove
> queue ・ filter ・ radio ・ loob

**Links**
[SUPPORT](https://discord.gg/DcP6vw3CRw)       [INVITE](https://discord.com/api/oauth2/authorize?client_id=871657014982508574&permissions=8&scope=bot) [website](comming soom)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#ff0000")
   message.react("<:2_:863362568801222656>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

