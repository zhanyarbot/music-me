////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { play } = require("../include/play");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
const ytsr = require("youtube-sr")

////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "play",
  aliases: ["p","Play"],
  description: "(p)Plays song from YouTube/Stream",
  cooldown: 1.5,
  edesc: `Type this command to play some music.\nUsage: ${PREFIX}play <TITLE | URL>`,

async execute(message, args, client) {
    //If not in a guild return
    if (!message.guild) return;
    //define channel
    const { channel } = message.member.voice;
    //get serverqueue
    const serverQueue = message.client.queue.get(message.guild.id);
    //If not in a channel return error
    if (!channel) return attentionembed(message, "Please join a Voice Channel first");
    //If not in the same channel return error
    if (serverQueue && channel !== message.guild.me.voice.channel)
      return attentionembed(message, `You must be in the same Voice Channel as me`);
    //If no args return
    if (!args.length)
      return attentionembed(message, `Usage: ${message.client.prefix}play <YouTube URL | Video Name | Soundcloud URL>`);
    message.react("<:2_:863362568801222656>").catch(console.error);
    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return attentionembed(message, "I need permissions to join your channel!");
    if (!permissions.has("SPEAK"))
      return attentionembed(message, "I need permissions to speak in your channel");
const search = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const urlValid = videoPattern.test(args[0]);
    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 69,
      filters: [],
      realseek: 0,
      playing: true
    };
    let songInfo = null;
    let song = null;
    try {
      if (serverQueue) {
        if (urlValid) {
          message.channel.send(new MessageEmbed().setColor("YELLOW")
            .setDescription(`**<a:emoji_40:823437442895314945> Searching <a:emoji_23:822641348490166274> [\`LINK\`](${args.join(" ")})**`))
        }
        else {
          message.channel.send(new MessageEmbed().setColor("YELLOW")
            .setDescription(`**<a:emoji_40:823437442895314945> Searching <a:emoji_23:822641348490166274> \`${args.join(" ")}\`**`))
        }
      } else {
        queueConstruct.connection = await channel.join();
        message.channel.send(new MessageEmbed().setColor("YELLOW")
          .setDescription(`** <a:emoji_1:822625385032056832> Joined \`${channel.name}\` 🧾 bound \`#${message.channel.name}\`**`)
          .setFooter(`By: ${message.author.username}#${message.author.discriminator}`))
        if (urlValid) { 
          message.channel.send(new MessageEmbed().setColor("YELLOW")
            .setDescription(`** <a:emoji_40:823437442895314945> Searching <a:emoji_23:822641348490166274> [\`LINK\`](${args.join(" ")})**`))
        }
        else {
          message.channel.send(new MessageEmbed().setColor("YELLOW")
            .setDescription(`** <a:emoji_40:823437442895314945> Searching <a:emoji_23:822641348490166274> \`${args.join(" ")}\`**`))
        }
        queueConstruct.connection.voice.setSelfDeaf(true);
        queueConstruct.connection.voice.setDeaf(true);
      }
    }
catch {
    }
    if (urlValid) {
      try {
        songInfo = await ytsr.searchOne(search) ;
        song = {
          title: songInfo.title,
          url: songInfo.url,
          thumbnail: songInfo.thumbnail,
          duration: songInfo.durationFormatted,
       };
      } catch (error) {
        if (error.statusCode === 403) return attentionembed(message, "Max. uses of api Key, please refresh!");
        console.error(error);
        return attentionembed(message, error.message);
      }
    }
    else {
      try {
        songInfo = await ytsr.searchOne(search) ;
        song = {
          title: songInfo.title,
          url: songInfo.url,
          thumbnail: songInfo.thumbnail,
          duration: songInfo.durationFormatted,
       };
      } catch (error) {
        console.error(error);
        return attentionembed(message, error);
      }
    }
    let thumb = "https://cdn.discordapp.com/attachments/822637229297238026/833218301542924308/20210418_084342.png"
    if (song.thumbnail === undefined) thumb = "https://cdn.discordapp.com/attachments/822637229297238026/833218301542924308/20210418_084342.png";
    else thumb = song.thumbnail.url;
    if (serverQueue) {
      let estimatedtime = Number(0);
      for (let i = 0; i < serverQueue.songs.length; i++) {
        let minutes = serverQueue.songs[i].duration.split(":")[0];
        let seconds = serverQueue.songs[i].duration.split(":")[1];
        estimatedtime += (Number(minutes)*60+Number(seconds));
      }
      if (estimatedtime > 60) {
        estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
        estimatedtime = estimatedtime + " Minutes"
      }
      else if (estimatedtime > 60) {
        estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
        estimatedtime = estimatedtime + " Hours"
      }
      else {
        estimatedtime = estimatedtime + " Seconds"
      }
serverQueue.songs.push(song);
      const newsong = new MessageEmbed()
       message.react("<a:emoji_81:830444292111204382>")
        .setTitle("<a:emoji_40:823437442895314945> "+song.title)
        .setURL(song.url)
        .setColor("#ff0000")
        .setImage(thumb)
        .setThumbnail(`https://media.discordapp.net/attachments/815252825012568085/815266512414703656/image0.png`)
         .addField("<a:emoji_86:833222624220938250> Requested by:", `\`${message.author.username}#${message.author.discriminator}\``, true)
        .addField("<a:emoji_65:830443146307567647> Time:", `\`${song.duration} Minutes\``, true)
        .addField("<a:emoji_34:822641693387653182> Volume:", `\`100\``, true)
        .addField(" Position in queue:", `**\`${serverQueue.songs.length - 1}\`**`, true)
        return serverQueue.textChannel
        .send(newsong)
        .catch(console.error);

    }
  //////////////////////////////////////////////////////////////////////////
    queueConstruct.songs.push(song);
    message.client.queue.set(message.guild.id, queueConstruct);
    try {
      play(queueConstruct.songs[0], message, client);
    } catch (error) {
      console.error(error);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return attentionembed(message, `Could not join the channel: ${error}`);
    }
  }
};
  //////////////////////////////////////////////////////////////////////////
