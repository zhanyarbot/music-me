const { tictactoe } = require('reconlx')
const Discord = require(`discord.js`)
module.exports = {
        name: "xo",
    run: async(client, message) => {
    
   var u = message.mentions.members.first()
    if(!u) return message.channel.send(`**Mention A Member**`)   
    
    new tictactoe({
            player_two: u, 
            message: message
        })
    }
}
