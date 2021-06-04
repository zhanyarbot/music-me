const { MessageEmbed } = require("discord.js");

const Color = `#E4B400`;

module.exports = {

  name: "avatar",
  aliases: ["A","a","avatar","Avatar","AVATAR","ava","Ava"],
description: "`Avatar @user`",
  category: "others",
execute(message, args) {
 

    const member = message.mentions.users.first() || message.author;

    const Embed = new MessageEmbed()

      .setColor("YELLOW")

      .setTitle(` ${member.username} `)
.setURL(URL)
   
.setImage(member.avatarURL({size: 2048, dynamic: true, format: "png"}))
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    message.channel.send(Embed);

  }

};
