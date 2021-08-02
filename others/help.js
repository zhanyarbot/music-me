
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

<:emoji_94:870360873816981535> ***| User Commands***
> invite ・ support(supp)・ uptime ・ prefix
> ping ・ invites・avatar ・ se ・ 
> listEmoji ・ user

<:emoji_80:870361373895454800> ***|Moderation Commands***
> topinvites(tinvites) ・ setnick
> lock ・ unlock ・ ban ・ unban
> clear ・ kick ・ channelinfo
> vkick ・ addrole ・ roleremove
> slowmode ・ invites ・ createchannel
> deletechannel ・ benner ・ count
> deafend ・ undeafend ・ rolebc
> hightRole ・ rooms ・

<:emoji_61:870357017657753661> ***| Gif Commands***
> boy gif ・ love gif・girl gif ・ sad gif ・ meme ・ 
> anime

<:emoji_79:870361413644873798> ***| photo Commnads ***
> pboy ・ pgirl ・ panime 

<a:emoji_90:842129191301677107> ***| Game Commands***
> stone ・ scissors ・ kill ・ slots ・ rps

<:emoji_96:870360776291012659> ***| Funny Commands***
> boom ・ hug ・ paper ・ kiss ・ slap

<a:emoji_23:870361554049204264> ***| Music Commands***
> play ・ skip ・ lyrics
> nowplaying ・ skipto ・ stop
> volume ・ nowplaying ・ resume
> shuffle ・ search ・ remove
> queue ・ filter ・ radio ・ loob

<:emoji_91:870360971825254470> **Links**
[SUPPORT](https://discord.gg/DcP6vw3CRw)       [INVITE](https://discord.com/api/oauth2/authorize?client_id=871657014982508574&permissions=8&scope=bot) [website](comming soom)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#ff0000")
   message.react("<:2_:863362568801222656>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

