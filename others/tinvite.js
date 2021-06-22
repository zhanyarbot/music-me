const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "tinvite",
  aliases: ["t"],
  cooldown: 8,
  description: "**all commands Pinky**",
  execute(message) {

 
message.guild.fetchInvites().then((invites) => {
            const inviteCounter = {}


            invites.forEach((invite => {
                const { uses, inviter } = invite
                const { username, discriminator } = inviter

                const name = `{inviter}`

                inviteCounter[name] = (inviteCounter[name] || 0) + uses
             }))

             let replyText = new MessageEmbed()
             .setDescription('**Top invites** \n')
             .setColor("BLUE")

             const sortedInvites = Object.keys(inviteCounter).sort((a, b) => inviteCounter[b] - inviteCounter[a])

             if (sortedInvites.length > 10) sortedInvites.length = 10
             else if(sortedInvites.length > 10) sortedInvites.length = sortedInvites.length


             for(const invite of sortedInvites) {
                 const count = inviteCounter[invite]
                 replyText.description += `\n${invite} has invited ${count} member(s)!`
             }
             message.channel.send(replyText)


        })
    }
