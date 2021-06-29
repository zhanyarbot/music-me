 const Discord = require('discord.js')
module.exports = {
name: "new",
run : async(client , message) => {
var embed = new Discord.MessageEmbed()
.setTitle(`Commands List`)
.setDescription(`**
✨ General Commands
⚙ Mods Commands
🎫 Ticket Commands
🎵 Music Commands
🎉 Giveaways Commands
**`)
message.channel.send(embed).then(msg => {
msg.react(`✨`)
msg.react(`⚙`)
msg.react(`🎫`)
msg.react(`🎵`)
msg.react(`🎉`)
msg.react(`❌`)
const gFilter = (reaction, user) => reaction.emoji.name === `✨` && user.id === message.author.id
const g = msg.createReactionCollector(gFilter , {time : 200000})
 
const mFilter = (reaction, user) => reaction.emoji.name === `⚙` && user.id === message.author.id
const m = msg.createReactionCollector(mFilter , {time : 200000})
 
const tFilter = (reaction, user) => reaction.emoji.name === `🎫` && user.id === message.author.id
const t = msg.createReactionCollector(tFilter , {time : 200000})
 
const sFilter = (reaction, user) => reaction.emoji.name === `🎵` && user.id === message.author.id
const s = msg.createReactionCollector(sFilter , {time : 200000})
 
const vFilter = (reaction, user) => reaction.emoji.name === `🎉` && user.id === message.author.id
const v = msg.createReactionCollector(vFilter , {time : 200000})
 
const dFilter = (reaction, user) => reaction.emoji.name === `❌` && user.id === message.author.id
const d = msg.createReactionCollector(dFilter , {time : 200000})
g.on('collect', (reaction , user) => {
var embed = new Discord.MessageEmbed()
.setTitle(`General Commands`)
.setDescription(`Commands Here`)
msg.edit(embed)
reaction.users.remove(user.id)
})
 
m.on('collect', (reaction , user) => {
var embed = new Discord.MessageEmbed()
.setTitle(`General Commands`)
.setDescription(`Commands Here`)
msg.edit(embed)
reaction.users.remove(user.id)
})
 
t.on('collect', (reaction , user) => {
var embed = new Discord.MessageEmbed()
.setTitle(`General Commands`)
.setDescription(`Commands Here`)
msg.edit(embed)
reaction.users.remove(user.id)
})
 
s.on('collect', (reaction , user) => {
var embed = new Discord.MessageEmbed() 
