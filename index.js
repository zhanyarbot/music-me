const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { TOKEN, PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login('ODI4OTIxNDYzMzQ4MjY0OTgy.YGwnRQ.k77WXGV_flNOLgARbp-S7W7bw9c');
client.commands = new Collection();
client.setMaxListeners(0);
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);


//this fires when the BOT STARTS DO NOT TOUCH

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "boy gif")) {
    let man = [
      "https://media.discordapp.net/attachments/786897044483604490/803870769313480714/Enes_Acar_GIF_70.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870817351368734/5-2.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829010513966/image1.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829483552838/image3.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804219672513478706/Lenora_36.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220394697392158/Lenora_33.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804315371271749662/image0-20.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968359572930580/ALANIS_MAN_GIF_156.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804760463044640808/ALANIS_MAN_GIF_99.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870737941135421/ENES_ACAR_GIF_15.gif"  
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} MAN GIFS photos  `,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
        
 
     
 




client.on('message', message => {
        if(message.content.startsWith(PREFIX + 'deafen')) {
      if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
        return message.reply('**Menition member**❌').catch(console.error);
      }
      if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
        return message.reply('I dont have premission**❌').catch(console.error);
      }
 
      const deafenMember = (member) => {
        if (!member || !member.voiceChannel) return;
        if (member.serverDeaf) return message.channel.send(`${member} **دیفێند کرا**:x:`);
        member.setDeaf(true).catch(console.error);
        if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**You dont have DEAFEN_MEMBER**❌ ").then(m => m.delete(5000));
      };
 
      message.mentions.users.forEach(user => deafenMember(message.guild.member(user)));
      message.mentions.roles.forEach(role => role.members.forEach(member => deafenMember(member)));
        }
 
    });

client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(PREFIX + "rolebc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });

client.on('message', async message =>{
      if(message.content.startsWith(PREFIX + 'undeafen')) {
 
    if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
      return message.reply('**Please menition member**❌').catch(console.error);
    }
    if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
      return message.reply('**I dont undeafen member**❌ ').catch(console.error);
      if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**You dont have premission Deafen member**❌ ").then(m => m.delete(5000));
    }
 
    const undeafenMember = (member) => {
      if (!member || !member.voiceChannel) return;
      if (!member.serverDeaf) return message.channel.send(`${member} `);
      member.setDeaf(false).catch(console.error);
    };
 
    message.mentions.users.forEach(user => undeafenMember(message.guild.member(user)));
    message.mentions.roles.forEach(role => role.members.forEach(member => undeafenMember(member)));
    }
    });

  client.on("message", message => {
  let args = message.content.split(" ");
  if (args[0] === PREFIX + "hightRole") {
    let user =
      message.mentions.users.first() ||
      client.users.cache.get(args[1]) ||
      message.author;
    if (!user) return message.channel.send(`> ❎ | I Can't Find This User.`);
    let height = message.guild.member(user).roles.highest.id;
    let heightR = message.guild.roles.cache.find(r => r.id === height);
    let embed = new Discord.MessageEmbed()
      .setAuthor(`${user.username} info`)
      .addField(`Height Role:`, heightR)
      .setFooter(
        `Requsted By ${message.author.username}`,
        message.author.displayAvatarURL()
      )
      .setThumbnail(user.displayAvatarURL());
    message.channel.send(embed);
  }
});

client.on('message', message => {
        if(message.content.startsWith(PREFIX + 'mutevoice')) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
 
        if(message.mentions.users.size === 0) {
          return message.reply("Menition member");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.reply("Restart");
        }
        muteMember.setMute(true);
        if(muteMember) {
          message.channel.sendMessage("Muted voice ");
        }
      }
    });

client.on("message", message => {
  if (!message.content.startsWith(PREFIX)) return;
  if (!message.channel.guild)
    return 
  let command = message.content.split(" ")[0];
  command = command.slice(PREFIX.length);
  if (command === "kill") {
    var sabotage = message.mentions.users.first();
    if (sabotage == message.author)
      return message.reply(`**No please menition user**`);
    if (sabotage === client.user) return message.reply(`**Why?**`);
    if (sabotage < 1) {
      message.delete();
      return message.channel.sendMessage(
        "Put something to kill like mention your username or use an emoji"
      );
    }
    if (!sabotage)
      return message.channel.send(`Please Mention A Member to Kill :warning:`);
    message.channel.send("▄︻̷̿┻̿═━一 ${sabotage").then(msg => {
      msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`);
      }, 1000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`);
      }, 2000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :boom:`);
      }, 3000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :fire:`);
      }, 4000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :skull:`);
      }, 5000);
      msg.delete(6000);
      message.delete();
    });
    message.channel
      .send("**** The crime has been successfully hidden 🕳 **")
      .then(msg => msg.delete(7000));
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "rooms")) {
    if (message.author.bot) return;
    if (!message.guild) return;

    var channels = message.guild.channels.cache
      .map(channels => `${channels.name}, `)
      .join(" ");
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("**INFO ROOMS**")
      .addField(`${message.guild.name}`, `**Rooms:white_check_mark:**`)
      .addField(
        ":arrow_down: Rooms Number. :heavy_check_mark:",
        `** ${message.guild.channels.cache.size}**`
      )

      .addField(
        ":arrow_down:Rooms  Name. :heavy_check_mark::",
        `**[${channels}]**`
      );
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if(message.content.startsWith(PREFIX + "benner")) {
    if(message.guild.bannerURL() === null || message.guild.bannerURL === undefined) return message.channel.send("**❌ | This server doesn\'t have a banner.**");
    const ba = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setDescription(`[Banner URL](${message.guild.bannerURL}?size=2048)`)
    .setImage(message.guild.bannerURL() + "?size=2048")
    message.channel.send({embed : ba})
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "user")) {
    if (!message.channel.guild) return;
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    const embed = new Discord.MessageEmbed()
        .setThumbnail(heg.avatarURL())
        .addField("**ID**", `${heg.id}`, true)
        .addField("**Name**", `${heg.username}`, true)
        .addField('**Discrim Account**',"**#" +  `${heg.discriminator}**`,true)
        .addField("**Created Account At**", `${heg.createdAt}`, true)
        .addField("**Time Join Server**", message.member.joinedAt.toLocaleString())    
        .addField("**Bot**", `${heg.bot}`, true)
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM")     
        .setFooter("BLACK SESTAM");
  
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "deletechannel")) {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
    let args = message.content.split(" ").slice(1);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message
        .reply("**There is not Found room Please mention channel**")
        .catch(console.error);
    channel.delete();
  message.author.send("**Done check✅**")
  }
});



client.on("message", message => {
if (message.content.startsWith(PREFIX + "createchannel")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.channels.create(args.join(' '), 'create');
message.channel.send('Created  channel✅')
 
}
}); 





const rply = [
'ڕاوەستە با قوڵتر لە سیمات ڕابمێنم کێ دەزانێ ڕەنگە تاتۆدێیەوە من نەمێنم"];',
'بەخەیاڵیشمدا نەهاتبو هێندە تەنهابم..',////ba dlli xot la jegai zhmaraka wllami slawaka bnwsa
'بۆ دواجارە بەجێت دێڵم سا ماڵ ئاوا ئازیزەکەم',
'برینەکانم لە دڵخۆشیەکانی تۆ قوڵترە ،پێکەنینەکانشت ژەھرێکە بۆ برینەکانم',
'پەنجەرەكەت بكەرەوە هەر دڵدارەكەی جارانم.',
 'شـەو وەرە خـەونـم دڵـم بـۆت تـەنـگ بـووە..)!',
 'بەڵێنێکی بچوکت پێ دەدەم ، ڕۆژێک لە ھەموو کەسێکدا دەگەڕێی بۆ منێکی تر ، بەڵام نایدۆزیەوە',
 'من دەستەکانم ماندووی نوسینن بۆتۆ و تۆش ئاشقی دەستەکانی ئەوی!',
 'من دەستەکانم ماندووی نوسینن بۆتۆ و تۆش ئاشقی دەستەکانی ئەوی!',
 'خۆشمەوێیی بە سەلامەتی ھەموو ئەوانەی حەسودی بە جێگاکەت دەبەن',
 'دەستم بگرە تەواوی بوون و نەبوونی من تۆیی',
 'ھەموویان مرۆڤن لەکاتێکدا تۆ ژیانی',
 'کەسێک لە ژیانما نیە،ژیانم لەکەسێکایە'
];
 client.on('message', msg => {
 if (msg.content === "tkurd") {/////ba dlli xot la jegai sllaw shtek da bna
   msg.channel.send(`${rply[Math.floor(Math.random() * rply.length)]}`);
  }
}); 



client.on('message', async message => {
if(message.content.startsWith(PREFIX + 'mute')) {
let mention = message.mentions.members.first();
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
 
if (!message.guild.me.hasPermission('MANAGE_ROLES')) {
        const embed = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setColor("#ff0000")
.setTitle("Error ❌")
.setDescription("** I don't have permission`MANAGE_ROLES` **")
.setFooter(client.user.username,client.user.avatarURL())
message.channel.send(embed);
};
if (!message.member.hasPermission('MANAGE_GUILD')) {
    const embed = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setColor("#ff0000")
.setTitle("Error ❌")
.setDescription(`** you don't have permissionMANAGE_GUILD**`)
.setFooter(client.user.username,client.user.avatarURL())
message.channel.send(embed);
};
 
let muteRole = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if (!muteRole) {
    return message.channel.send("** I don't found role `Muted`**")
};
 
if(!mention) return message.channel.send(`**Ex : ${PREFIX}mute @user**`);
message.guild.channels.cache.forEach(c => {
c.updateOverwrite(role , {
SEND_MESSAGES: false, 
ADD_REACTIONS: false
});
});//////All codes by robot.probot we are a robot
mention.roles.add(role)
const embed = new Discord.MessageEmbed()
.setThumbnail(mention.user.avatarURL())
.setColor("#ff0000")
.setTitle("Done ✅")
.setDescription(`**muted ${mention.user.username}**`)
.setFooter(`by ${message.author.username}`)
message.channel.send(embed)
}
});

             
    
client.on("message", function(niro_games) {
  if (niro_games.content.startsWith(PREFIX  + "rps")) {
    let messageArgs = niro_games.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageRPS = niro_games.content
      .split(" ")
      .slice(2)
      .join(" ");
    let arrayRPS = ["**# - Rock**", "**# - Paper**", "**# - Scissors**"];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.MessageEmbed()
      .setAuthor(niro_games.author.username)
      .setThumbnail(niro_games.author.avatarURL())
      .addField("Rock", "🇷", true)
      .addField("Paper", "🇵", true)
      .addField("Scissors", "🇸", true);
    niro_games.reply(RpsEmbed).then(msg => {
      msg.react("🇸");
      msg.react("🇷");
      msg.react("🇵")
        .then(() => msg.react("🇸"))
        .then(() => msg.react("🇷"))
        .then(() => msg.react("🇵"));
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "🇸" && user.id === niro_games.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "🇷" && user.id === niro_games.author.id;
      let reaction3Filter = (reaction, user) =>
        reaction.emoji.name === "🇵" && user.id === niro_games.author.id;
      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: 12000
      });

      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: 12000
      });
      let reaction3 = msg.createReactionCollector(reaction3Filter, {
        time: 12000
      });
      reaction1.on("collect", r => {
        niro_games.reply(result);
      });
      reaction2.on("collect", r => {
        niro_games.reply(result);
      });
      reaction3.on("collect", r => {
        niro_games.reply(result);
      });
    });
  }
});

client.on('message', message => {
if(message.content.startsWith(PREFIX + "slots")) {
  let slot1 = ['??', '??', '??', '??', '??', '??', '??', '??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
   
 

 
 
 

 
client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "channelinfo")) { 
  let args = message.content.split(" ").slice(1)
let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.channel.send("**Channel Not Found!**");
        let channelembed = new Discord.MessageEmbed()
            .setTitle(`Channel Information for ${channel.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField("**NSFW**", channel.nsfw, true)
            .addField("**Channel ID**", channel.id, true)
            .addField("**Channel Type**", channel.type)
            .addField("**Channel Topic**", `${channel.topic || "No Description"}`)
            .addField("**Channel Created At**", channel.createdAt)
           .setFooter('Bawan')
        .setColor("#ff0000")
        message.channel.send(channelembed);
    }
})

client.on('message', message => {
if (message.content.startsWith(PREFIX + 'listEmoji')) {
  let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new Discord.MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name}.`)
      .setDescription(
        `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**All Emoji [${OverallEmojis}]**`
      )
      .setColor(`#ff0000`);
    message.channel.send(Embed);
 
}})

client.on('message',  (message) => {
        if(message.content.startsWith('+hug')) {
  let user = message.mentions.users.first() 
  if (!user) return message.reply('mention someone to Hug')
 
 
  let hugs = [
    "https://media.discordapp.net/attachments/738277612039962688/775010008437096508/image0.gif"
  ,"https://media.discordapp.net/attachments/738277612039962688/775010008676433945/image1.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010008823103508/image2.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010008982224896/image3.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009151045692/image4.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009322094602/image5.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009578340382/image6.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009796575262/image7.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009972867082/image8.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010010152566804/image9.gif"
 
 
  ];
 
  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} Hugs ${user.username}!`)
 
.setImage(hugs[Math.floor(Math.random() * hugs.length)])
.setFooter('create by bawan ')
message.channel.send(embed)
 
        }})


client.on("message", message => {
  if (message.content.startsWith(PREFIX + "kick")) {
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send("**You dont have premission**");
    let tag = message.mentions.members.first();
    if (!tag) return "**Aw kasa La server nya**";
    let args = message.content.split(" ").slice(1);
    if (!args)
      return message.channel.send("**Please Mention Member**");
      if (!message.guild.member(tag).kickable) return message.reply("**I cant Kick Member Because The Member High Roles**");
    var blackjack = "Black sestam";
    const ban = new Discord.MessageEmbed()
      .setTitle("**Banned In a Server**")
      .addField("Guild", message.guild.name)
      .addField("Name member ban", tag)
      .addField("Moderation", message.author.tag)
      .setFooter("BLACK SESTAM")
      .setColor("#ff0000");
    message.channel.send(ban);
    tag.kick();
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX+ "girl gif")) {
    let girl = [
      "https://media.discordapp.net/attachments/786897045436366849/804968189892755456/image2-1.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968223577604126/gif472.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968231794245642/rexsin_212.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968258859827210/pintrst___luri_4.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804983128527077387/a_177ddfe86ad32b68be6200f007682136.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008600334073866/3WIu.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805370008330436648/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008566439641128/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804681217022099466/a_3c85d4517fbaf4f750d344820b49c076.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804682936615829504/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804314115601596426/ALANIS_WOMAN_GIF_176.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804280612227383316/ALANIS_WOMAN_GIF_138.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} GIRL GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});


client.on("message", message => {
  if (message.content.startsWith(PREFIX + "love gif")) {
    let loves = [
      "https://media.discordapp.net/attachments/608711480346542102/782233713538498600/hit_gif_5.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782286421020508170/image0_1.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782284851570147358/image0-1-4.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782406047473467422/image0.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782148760997593098/a_8bc52b6080ce3079988c6e49f84c4b03.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782445443665625128/ezgif-7-2032ed99845d.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782196955488321556/a_637b8e2042d540a1e5e28282e3fe5cc7.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803307812608409600/image0.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869330005688340/a_130ce69bc8c1f06d917ee668f7051b64.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869344266321931/dans4.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869587988152340/gif.13.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869653641854996/20210105_223539.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869660814376960/a_09fbaba0301c6db194af2f0c6d2a6a93.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804188805204410378/2.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804337804179275776/16-10-27-tenor.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759240451424256/Lrows_Gif_25.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759252899594259/ciftler8.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} :heart:  Love photos  `,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "meme")) {
    let meme = [
      "https://media.discordapp.net/attachments/778349612146360381/805361657781944340/FB_IMG_1608729181806.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361657177702420/IMG_20201125_181212.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361656954748948/received_310923683551106.jpeg",
      "https://media.discordapp.net/attachments/778349612146360381/805361656698765342/Komede.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361172776747038/1f16fa85f750c462.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361042229690398/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805361152481689610/image0.jpg",
      "https://media.tenor.co/videos/2f17757958ab63c82e105cb2f068ba25/mp4",
      "https://media.discordapp.net/attachments/793750057500278805/805371117404815360/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805370861393149962/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805370485155954728/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805363347390201866/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805363470182383646/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805363578055163934/image0.jpg",
      "https://media.discordapp.net/attachments/788957374311956480/792776202984095744/133411745_960371687826475_946663856063250772_n.png",
      "https://media.discordapp.net/attachments/768041476004904971/781669774374469642/124907941_1816050908534119_3407893796902602469_n.jpg",
      "https://media.discordapp.net/attachments/768041476004904971/777584124663037982/Will_You_Shut_Up_Man_.jpg",
      "https://media.discordapp.net/attachments/768041476004904971/777176870130155540/Screenshot_2020-11-14-18-17-30.png",
      "https://media.discordapp.net/attachments/791219055083651092/805364265540124683/image0.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361657387024414/Screenshot_20210122_160111.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805781587316441108/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805781864220196885/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805782023562199060/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/806561503980421120/image0.jpg"
    ];

    message.channel
      .send({
        embed: {
          description: `**${message.author.username} Meme photos :joy:**`,
          image: {
            url: meme[Math.floor(Math.random() * meme.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "boom")) {
    let bombs = [
      "https://media.giphy.com/media/Xp98Vi5OBvhXpwA0Zp/giphy.gif",
      "https://media.giphy.com/media/POnwee2RZBWmWWCeiX/giphy.gif",
      "https://media.giphy.com/media/oywQ7OhnYupINQa0L4/giphy.gif",
      "https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif",
      "https://media.giphy.com/media/l1BgS9aNtdCdjgkaQ/giphy.gif",
      "https://media.giphy.com/media/d0NnEG1WnnXqg/giphy.gif",
      "https://media.giphy.com/media/NmrqUdwGXPOog/giphy.gif",
      "https://media.giphy.com/media/dpnfPvaCIHBrW/giphy.gif",
      "https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif",
      "https://media.giphy.com/media/8wfoaIjVc0FBaLu5xH/giphy.gif",
      "https://media.giphy.com/media/xThtanBNixj1O1m5oY/giphy.gif",
      "https://media.giphy.com/media/fdGkCOiM0oOqI/giphy.gif",
      "https://media.giphy.com/media/c862b2dAhJXYA/giphy.gif",
      "https://media.giphy.com/media/CepTYjGRbV1ba/giphy.gif",
      "https://media.giphy.com/media/sRGCQ7INgSD0qbTqB5/giphy.gif",
      "https://media.giphy.com/media/ZJYOwl8SbFsic/giphy.gif",
      "https://media.giphy.com/media/3oEhmKspQX9EN48HNm/giphy.gif",
      "https://media.giphy.com/media/l1KVcAP6jvP9r4MaA/giphy.gif",
      "https://media.giphy.com/media/j2mY6orBJqAdG/giphy.gif",
      "https://media.giphy.com/media/3oz8xEqn8AGAQbR0yY/giphy.gif",
      "https://media.giphy.com/media/l4lQW9KfRQscU0ds4/giphy.gif",
      "https://media.giphy.com/media/XathaB5ILqSME/giphy.gif",
      "https://media.giphy.com/media/26AHvF2p5pridaSf6/giphy.gif",
      "https://media.giphy.com/media/Nlur5uO8GkjC0/giphy.gif",
      "https://media.giphy.com/media/l1J3preURPiwjRPvG/giphy.gif",
      "https://media.giphy.com/media/8cdZit2ZcjTri/giphy.gif",
      "https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif",
      "https://media.giphy.com/media/V88pTEefkoOFG/giphy.gif",
      "https://media.giphy.com/media/rfWAomOTPeOo8/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} BOOMED`,
          image: {
            url: bombs[Math.floor(Math.random() * bombs.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on('message',  (message) => {
        if(message.content.startsWith('+slap')) {
  let user = message.mentions.users.first();
  if (!user) return message.reply('mention someone to Slap')
  let slaps = [
   "https://media.discordapp.net/attachments/738277612039962688/775009108402372608/image0.gif",
    "https://media.discordapp.net/attachments/738277612039962688/775009109166522428/image1.gif"
    ,"https://media.discordapp.net/attachments/738277612039962688/775009109383577621/image2.gif",
    "https://media.discordapp.net/attachments/738277612039962688/775009109585821746/image3.gif",
    "https://media.discordapp.net/attachments/738277612039962688/775009109749006406/image4.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775009110177349692/image6.gif",
    "https://media.discordapp.net/attachments/738277612039962688/775009110373433364/image7.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775009110525345797/image8.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775009110663233576/image9.gif"
  ];
  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} Slap ${user.username}!`)
 
.setImage(slaps[Math.floor(Math.random() * slaps.length)])
 
message.channel.send(embed)
        }})

client.on('message',  (message) => {
        if(message.content.startsWith('+kiss')) {
  let user = message.mentions.users.first();
  if (!user) return message.reply('mention someone to Kiss')
  var kiss = [
"https://media.discordapp.net/attachments/738277612039962688/775017819980431360/image0.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820161179648/image1.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820445868032/image2.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820643262465/image3.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820853239808/image4.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017821129932860/image5.gif",       
"https://media.discordapp.net/attachments/738277612039962688/775017821611753472/image7.gif",
"https://media.discordapp.net/attachments/725046590242291763/775020613109678090/image0.gif",  
 
  ];
 
  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} kiss ${user.username}!`)
 
.setImage(kiss[Math.floor(Math.random() * kiss.length)])
 
message.channel.send(embed)
        }})


client.on('message',message => {
if(message.content.startsWith(PREFIX + 'ban')) {
let args = message.content.split(" ").slice(1)
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('bbura to natwane am frmana anjam bdait')
 
let Ban = message.mentions.members.first();
let hokar = args.slice(1).join(" ");
if(!args[0]) return message.channel.send('tkaya kasek mention bka bo ban krdn')
if(!Ban) return message.channel.send(`${args[0]}      am kasa bwny niya la server`)
if(!hokar) return message.channel.send('hokarek dyare bka')
 
if(!Ban.bannable) {
return message.channel.send('to natwane am kasa ban bkai')
 
}
 
if(Ban.bannable) {
const embed = new Discord.MessageEmbed()
.setTitle('Ban')
.setColor('#ff0000')
.addField('kase ban kraw', Ban)
.addField('ban kra la layan', message.author)
.addField('ba hokare', hokar)
.setFooter('ban')
message.channel.send(embed)
 
Ban.ban();
}}})

client.on('message', async message=>{
  if(message.content.startsWith(PREFIX +'unban')){
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('bbura to natwane am frmana anjam bdait')
    let args = message.content.split(" ").slice(1)
if(!args[0]) return message.channel.send('tkaya kasek mention bka bo unban krdn')
const reason = args[1] || "be hokar"
let unban = await client.users.fetch(args[0])
 
message.guild.members.unban(unban,reason)
const qala = new Discord.MessageEmbed()
 
  .setTitle('unBan')  
    .addField('kase unban kraw ',unban)
 
.addField('un ban kra la layan',message.author)
 
.addField('ba hokare',reason)
.setFooter('Powered by BAWAN/ KURD FAM')
message.channel.send(qala)
 
  }})

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "vkick")) { 
   if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }
 
    if (!message.mentions.members.first())
      return message.channel.send(
        `kasek mention bka bo kick voice!`
      );
 
    let { channel} = message.mentions.members.first().voice;
 
    if (!channel)
      return message.channel.send(`am kasa la voice niya`);
 
    message.mentions.members.first().voice.kick();
 
    message.channel.send(`kick kra la voice !`)
  }
})

client.on("message", message => {
if(message.content.startsWith(PREFIX + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`
\`\`\`js
Command: setnick
 
Nickname:
+setnick (name)
+setnick (user}) (nick)
 
\`\`\`
 
`);
message.guild.member(user.user).setNickname(`${nick}`);
message.channel.send(`Successfully changed **${user}** nickname to **${nick}** `);
}
});

client.on("message", msg => {
if(msg.content.startsWith(PREFIX +"clear")) {
 let args = msg.content.split(" ").slice(1);
 if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You can't use this command!");
        if(!args[0]) return msg.channel.send("Specify how many messages you want to delete.");
        msg.delete();
        msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send("You can only delete 100 messages at once.")});
        msg.channel.send(`Successfully deleted \`${args[0]} messages\``).then(m => m.delete({ timeout: 5000 }));
}})

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "roleadd")) { 
 
if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("rolem niya tawakw am kara bkam");
    } 
    let qawrma = message.mentions.members.first();
    if(!qawrma) return message.reply(`kasek mention bka !`)
    let shla = message.mentions.roles.first();
    if(!shla) return message.reply(` rolek mention bka `)
 
      const embed = new Discord.MessageEmbed()
 
      .setColor("RANDOM")
      .setDescription(`Done changed role for ${qawrma.user.username} added ${shla}`)
 
      await message.channel.send(embed)
 
      qawrma.roles.add(shla)
 
  }
})

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "roleremove")) { 
 
if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("rolem niya tawakw am kara bkam");
    } 
    let qawrma = message.mentions.members.first();
    if(!qawrma) return message.reply(`kasek mention bka !`)
    let shla = message.mentions.roles.first();
    if(!shla) return message.reply(` rolek mention bka `)
 
      const embed = new Discord.MessageEmbed()
 
      .setColor("RANDOM")
      .setDescription(`Done changed role for ${qawrma.user.username} removed ${shla}`)
 
      await message.channel.send(embed)
 
      qawrma.roles.remove(shla)
 
  }
})

client.on("message", async message => {
  if (message.content.startsWith(PREFIX + "tinvites")) {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply(" Error : ` Server Command `");
 
    var invites = await message.guild.fetchInvites();
    invites = invites.array();
    invites, "uses", { reverse: true };
    let possibleInvites = ["User Invited |  Uses "];
    invites.forEach(i => {
      if (i.uses === 0) {
        return;
      }
      possibleInvites.push([
        "\n " + "<@" + i.inviter.id + ">" + "  :  " + i.uses
      ]);
    });
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("Top Invites.", `${possibleInvites}`);
 
    message.channel.send(embed);
  }
});


client.on(`ready`, () => {

//////////////




////////
   

   ///////////////////////////////
    ////////////IFCHEMPTY//////////
        //remove everything in between those 2 big comments if you want to disable that the bot leaves when ch. or queue gets empty!
        setInterval(() => { 
          let member;
        client.guilds.cache.forEach(async guild =>{
        await delay(15);
          member = await client.guilds.cache.get(guild.id).members.cache.get(client.user.id)
        //if not connected
          if(!member.voice.channel)
          return;
        //if alone 
        if (member.voice.channel.members.size === 1) 
        { return member.voice.channel.leave(); }
      });
      



    client.user.setActivity(`Type: ${PREFIX}help`, { type: "LISTENING"});
    client.user.setActivity(`Type: GuIdis ${client.guilds.cache.size},Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)},`, { type: "LISTENING"});
      }, (5000));
      ////////////////////////////////
      ////////////////////////////////
    figlet.text(`${client.user.username} ready!`, function (err, data) {
      if (err) {
          console.log('Something went wrong');
          console.dir(err);
      }
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
      console.log(data)
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
    })
   
});

//DO NOT TOUCH
//FOLDERS:
//Admin custommsg data FUN General Music NSFW others
commandFiles = readdirSync(join(__dirname, `Music`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Music`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `others`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `others`, `${file}`));
  client.commands.set(command.name, command);
}
//COMMANDS //DO NOT TOUCH
client.on(`message`, async (message) => {
  if (message.author.bot) return;
  
  //getting prefix 
  let prefix = await db.get(`prefix_${message.guild.id}`)
  //if not prefix set it to standard prefix in the config.json file
  if(prefix === null) prefix = PREFIX;

  //information message when the bot has been tagged
  if(message.content.includes(client.user.id)) {
    message.reply(new Discord.MessageEmbed().setColor("RANDOM").setAuthor(`**Join a voice channel and \`${prefix}play a song. Type \`${prefix}help\` for the list of commands. **`, ({dynamic:true})));
  } 

//An server announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}server`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("", "")
    .setThumbnail(` `)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`

** <a:emoji_24:850633169978916864>__Server Name__**
${message.guild.name}

** <a:emoji_23:850626724513185802>__Server ID__**
${message.guild.id}

** <a:emoji_17:850611627321327617>__Server Owner__**
${message.guild.owner}

** <a:emoji_13:850610633618489344>__Server Members__**
${message.guild.memberCount}

**__Server Roles__**
${message.guild.roles.cache.size}

**__Server Channels__**
${message.guild.channels.cache.size}

**__Server Region__**
${message.guild.region}

**__Server Boosts__**
${message.guild.premiumSubscriptionCount}


`)
////////
/////
    //send the Message
    message.channel.send(embed)
    message.react("<a:emoji_81:830444292111204382>")
  } 
   
 //////

//An tag bot announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`<@>`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("", "")
    .setThumbnail(``)
    .setDescription(`

**\`${prefix}play\` a song.**
**Type \`${prefix}help\` for the list of commands.**
`)

    //send the Message
    message.channel.send(embed)
    message.react("<a:emoji_81:830444292111204382>")
  } 

 //////

//An status announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}status`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("", "")
    .setThumbnail(` `)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`

**__Guilds__**
${client.guilds.cache.size}
**__Users__**
${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}
**__Channels__**
${client.channels.cache.size}
**__Commands__**
${client.commands.size}

`)

    //send the Message
    message.channel.send(embed)
    message.react("<a:emoji_81:830444292111204382>")
  } 

//////
   
 //////

//An about announcement for everyone but no one knows so fine ^https://discord.com/api/oauth2/authorize?client_id=821793441293139968&permissions=4294967287&scope=botw^
  if(message.content.startsWith(`${prefix}about`)){
    // define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("", "")
    .setThumbnail(` `)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`

** <a:s_:849928845750698004> Developers Bot**
 <@743887896481628190>

** <a:emoji_31:851033224293384203>ping bot**
${client.ws.ping}

**<a:emoji_21:850626696754233364>ID Bot**
${client.user.id}

**<a:emoji_30:850655693937967144> Name Bot**
${client.user.tag}

**<a:emoji_22:850626710352166923>Prefix Bot**
[ ${PREFIX} ]

**<a:emoji_24:850633169978916864>Servers**
${client.guilds.cache.size}

**<a:emoji_23:850626724513185802>Users**
${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}


**<a:emoji_11:850610595350970369>Channels**
${client.channels.cache.size}

**<a:emoji_12:850610615877894154>Commands**
${client.commands.size}

**<a:emoji_16:850611586921398283>Node**
${process.version}
`)

    //send the Message
    message.channel.send(embed)
    message.react("<a:emoji_81:830444292111204382>")
  }


///////
//command Handler DO NOT TOUCH
 const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
 if (!prefixRegex.test(message.content)) return;
 const [, matchedPrefix] = message.content.match(prefixRegex);
 const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
 const commandName = args.shift().toLowerCase();
 const command =
   client.commands.get(commandName) ||
   client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
 if (!command) return;
 if (!cooldowns.has(command.name)) {
   cooldowns.set(command.name, new Collection());
 }
 const now = Date.now();
 const timestamps = cooldowns.get(command.name);
 const cooldownAmount = (command.cooldown || 1) * 1000;
 if (timestamps.has(message.author.id)) {
   const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
   if (now < expirationTime) {
     const timeLeft = (expirationTime - now) / 1000;
     return message.reply(
      new MessageEmbed().setColor("#F0EAD6")
      .setTitle(`:x: Please wait \`${timeLeft.toFixed(1)} seconds\` before reusing the \`${prefix}${command.name}\`!`)    
     );
   }
 }
 timestamps.set(message.author.id, now);
 setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
 try {
   command.execute(message, args, client);
 } catch (error) {
   console.error(error);
   message.reply( new MessageEmbed().setColor("#F0EAD6")
   .setTitle(`:x: There was an error executing that command.`)).catch(console.error);
 }


});
function delay(delayInms) {
 return new Promise(resolve => {
   setTimeout(() => {
     resolve(2);
   }, delayInms);
 });
}
