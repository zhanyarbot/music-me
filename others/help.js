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
    .setThumbnail(`https://cdn.discordapp.com/attachments/822586742929490012/840421371439874058/20210508_053224.png`)
    .setTitle(`Help Menu`)
    .setDescription(`
Invite Nakano to your server by [click here](https://discord.com/api/oauth2/authorize?client_id=821793441293139968&permissions=4294967287&scope=bot)

__To see each part of the commands__

**-info | -music | -fun | -mod**


Need more help? Come join our [server](https://discord.gg/sRc9SteRyE)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("YELLOW")
   message.react("<a:emoji_81:830444292111204382>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
