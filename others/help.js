const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h","HELP"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setTitle(`Help Commands`)
    .setDescription(`
**Info commands**
> \`invite ,ping ,uptime ,server ,about ,status ,se ,invites ,prefix ,support\`
**Music commands**
> \`play ,loop ,lyrics ,nowplaying ,pause ,queue ,remove ,resume ,search ,shuffle ,skip ,skipto ,stop ,volume ,filters\`
**Fun commands**
> \`impostor ,simp ,rate ,icon ,avatar\`
**Admin commands**
> \`lock ,unlock ,slowmode ,embed\`

`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("YELLOW")
   message.react("<a:emoji_81:830444292111204382>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
