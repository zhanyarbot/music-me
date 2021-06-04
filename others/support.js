const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "support",
  aliases: ["Support","supp","Supp","Sup","sup"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/822586742929490012/840421371439874058/20210508_053224.png`)
    .setTitle(`Support for Nakano`)
    .setDescription(`
Invite nakano to your server by: [click here](https://discord.com/api/oauth2/authorize?client_id=821793441293139968&permissions=3795713345&scope=bot)
join the server to support us: [click here](https://discord.gg/sRc9SteRyE)
`)

  
   .setColor("YELLOW");
   message.react("<a:emoji_81:830444292111204382>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
