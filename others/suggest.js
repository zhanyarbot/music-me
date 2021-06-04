const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "suggest",
    aliases: ["sugg","Sugg","sug","Sug","Suggestion","suggestion","Suggest"],
    description: "Make a suggestion and have the community vote",
    category: "others",
    usage: "i!suggest <suggestion>",
  async execute(message, args) {
        let suggestion = args.slice(0).join(" ");
        let SuggestionChannel = message.guild.channels.cache.find(channel => channel.name === "・suggest");
      
      if(!suggestion) {
        return message.reply("Please write a suggestion")
      }
      
      
        message.react(":yes:").catch(console.error);
        const embed = new MessageEmbed()
            .setTitle("Suggestion | ✅ or ❌")
            .setDescription(suggestion)
            .setColor("YELLOW")
            .setFooter(`Suggest By: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
        SuggestionChannel.send(embed).then(msg => {
            msg.react("✅")
            msg.react("❌")
        message.channel.send("");
        });
    }
}
