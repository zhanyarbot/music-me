const Discord = module.require("discord.js");

module.exports = {
   name: "unlock",
   aliases: ["un","Un","Unlock"],
   description: "Unlocks a Channel",
   async execute(message, args) {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setThumbnail(`https://cdn.discordapp.com/attachments/822586742929490012/840421371439874058/20210508_053224.png`)
   .setTitle("")
   .setTimestamp()
   .setThumbnail(message.author.avatarURL({dynamic: "true"}))
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setDescription(`
**🔓 Unlocked Channel**
**\`Channel Name\`** : <#${message.channel.id}>
**\`Locked By\`** : <@${message.author.id}>
`)
   .setColor("YELLOW");
   await message.channel.send(embed);
}
}
