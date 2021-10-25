const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { TOKEN, PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login('OTAyMjg5MDYyODg1NDU3OTgz.YXcQLA.C-3cKcWE910qcCD7cACUEo7Q3WQ');
client.commands = new Collection();
client.setMaxListeners(0);
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);


//this fires when the BOT STARTS DO NOT TOUCH

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "boy")) {
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

client.on('message', async abdo => {
    if (abdo.content.startsWith(PREFIX + "delete channel")) {
    if (!abdo.member.hasPermission('MANAGE_CHANNELS')) return abdo.channel.send('**تۆ ناتوانی ئەم کردارە بکەیت واز بێرە سەرمان مەیەشێنە 😗**');
     abdo.channel.send('**تـۆ دڵـنـیـای بـۆ سـڕیـنـەوەی ئـەم چـەنـاڵـە تـەنـهـا بـەڕیـاکـشـن جـوابـم دەوە؟**').then(msg => {
       msg.react('✅');
       msg.react('❎');
		  const yesC = (reaction, user) =>
					reaction.emoji.name === '✅' && user.id === abdo.author.id;
			const noC = (reaction, user) =>
					reaction.emoji.name === '❎' && user.id === abdo.author.id;
      const yes = msg.createReactionCollector(yesC, {
        time: 20000
      });
			const no = msg.createReactionCollector(noC, {
			  time: 20000
			});
			yes.on('collect', y => {
			  abdo.channel.delete();
			});
			no.on('collect', n => {
			  msg.delete();
			});
     });
}
});


client.on("message", message => {
  if (message.content.startsWith(PREFIX + "pboy")) {
    let exploit = [
      "https://cdn.discordapp.com/avatars/584486122521100308/00e684b8c3ca4fab1a8d3efc200e58ac.webp",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860633202262066/image1.jpg",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860633377636392/image2.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860633638600769/image3.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860633876627476/image4.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860633876627476/image4.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860634485981204/image5.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860634485981204/image5.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860634485981204/image5.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860670670241822/image2.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860670019076116/image0.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860670300880916/image1.png",
      "https://cdn.discordapp.com/attachments/837463807202033736/837560698396606545/image0.jpg",
      "https://cdn.discordapp.com/attachments/837463807202033736/837464867567960084/15-36-03-image6.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139999523209216/Leris_Man_PP_70.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139998276583454/Leris_Man_PP_69.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139996401860619/Leris_Man_PP_68.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139995034255380/Leris_Man_PP_67.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139993978994708/Leris_Man_PP_66.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139992623317022/Leris_Man_PP_65.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139990900113418/Leris_Man_PP_64.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139986877513739/Leris_Man_PP_62.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139985140416512/Leris_Man_PP_61.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139949540343808/Leris_Man_PP_48.jpg"
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username}** \`Photo\` ` ,
          image: {
            url: exploit[Math.floor(Math.random() * exploit.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

/////////

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "pgirl")) {
    let exploit = [
      "https://cdn.discordapp.com/avatars/829349613717684256/4bea6e23e0bfc15da73b3d28fe2ee8a3.png?size=1024",
      "https://cdn.discordapp.com/avatars/802587393398931487/6d77fb4ab92b050ad2ef1f56b4d33e69.png?size=1024",
      "https://cdn.discordapp.com/attachments/837463807202033736/837722582689251418/e2b8fd1c-e712-45d3-bb2f-55084be192b3.jpeg",
      "https://cdn.discordapp.com/attachments/837463807202033736/837723967980175360/d49028368c80fbd5d27dddf81d8af673.jpg",
      "https://cdn.discordapp.com/attachments/837463807202033736/837723989220524032/IMG_20210424_194718_447.jpg",
      "https://cdn.discordapp.com/attachments/830884935258734595/838133843306348554/R3.gif"
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username}** \`Gif\` ` ,
          image: {
            url: exploit[Math.floor(Math.random() * exploit.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

///////

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "anime")) {
    let exploit = [
      "https://tenor.com/view/disney-moana-youre-welcome-maui-dance-gif-15810606",
      "https://cdn.discordapp.com/avatars/584645306163920946/a_9e305d6bfadf502cc77cc2935d03febe.gif?size=1024",
      "https://cdn.discordapp.com/attachments/697505578972348436/737052175754199070/image0.gif",
      "https://cdn.discordapp.com/attachments/694694884459937862/736898906633273364/64.gif",
      "https://cdn.discordapp.com/attachments/697505578972348436/737311070364106844/image0.gif",
      "https://cdn.discordapp.com/attachments/694694884459937862/737113186280538152/image0.gif",
      "https://cdn.discordapp.com/attachments/694694884459937862/735948187487174747/48.gif",
      "https://cdn.discordapp.com/attachments/825478733657407508/830065378561359882/S4.gif",
      "https://cdn.discordapp.com/attachments/825478733657407508/830065183560302642/K4.gif",
      "https://cdn.discordapp.com/attachments/825478733657407508/830064695766941737/D3.gif",
      "https://cdn.discordapp.com/attachments/825478733657407508/830064611155116062/O1.gif",
      "https://cdn.discordapp.com/attachments/825478733657407508/830064202034446416/Q3.gif",
      "https://cdn.discordapp.com/attachments/825478733657407508/830064168987394138/L3.gif"
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username}** \`Gif\` ` ,
          image: {
            url: exploit[Math.floor(Math.random() * exploit.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

//////

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "panime")) {
    let exploit = [
      "https://cdn.discordapp.com/attachments/833819106528329761/837877576700526622/Screenshot_20210403_170626.jpg",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877607668252692/image0-13.jpg",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877607903002696/20201228_181147-1.jpg",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877638877020180/3a717dfa4c3fb4a7cf5f5783de164da8.jpg",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877639049773096/R9cfae23664d44486a7ab5c8b51515ae2_1-1.gif",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877639175077969/R7ce25f7820245a03ca8b3e3a58b015ee.gif",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877695646793768/Rdc3a48907a088478d72119c194dd331c.gif",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877695965691935/1b49a8e00d220175742707a232fcfd8a.gif",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877696188121088/72TQ.gif",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877732611850250/tenor_1.gif",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877732795875358/images_3.jpeg",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877732939399178/images_1.jpeg",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877733156978699/images.jpeg",
      "https://cdn.discordapp.com/attachments/830066947290300476/830067385577766923/0047d2dd9ee1560faf81773baecb60c6.jpg",
      "https://cdn.discordapp.com/attachments/830066947290300476/830067318113173504/794a66c01ee0797f3dc90d0f307100f7.jpg",
      "https://cdn.discordapp.com/attachments/830066947290300476/830067248613031976/ff9859ccbaca1d1d75806588c216a5d6.jpg",
      "https://cdn.discordapp.com/attachments/830884935258734595/838133843507544064/M1.gif",
      
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username}** \`Gif\` ` ,
          image: {
            url: exploit[Math.floor(Math.random() * exploit.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on('message',async message => {
if (message.content.startsWith(PREFIX + 'mix')) {
 
 let args = message.content.split(" ").slice(1).join(" ");
 
if (!args[0]) return message.channel.send("You forgot to mention someone!")
        if (!args[1]) return message.channel.send("You need to mention someone else!")
 
        if (args[0] || args[1]) {
            var FirstUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            var SecondUser = message.mentions.members.first(-1) || message.guild.members.cache.get(args[1])
 
            if (!FirstUser) return message.channel.send(`I couldn't find someone named **${args[0]}**!`)
            if (!SecondUser) return message.channel.send(`I couldn't find someone named **${args[1]}**!`)
 
            if (FirstUser || SecondUser) {
                const FirstUserSliced = FirstUser.user.username.slice(0, FirstUser.user.username.length / 2)
                const SecondUserSliced = SecondUser.map(user => { return user.user.username.slice(user.user.username.length / 2) })
                const SecondUserName = SecondUser.map(user => { return user.user.username })
 
                message.channel.send(`${FirstUser.user.username} + ${SecondUserName} = **${FirstUserSliced}${SecondUserSliced}**`)
            }
        }
    }})

client.on('message', message => {
     if(!message.channel.guild) return;
 
                if(message.content.startsWith(PREFIX + 'allbots')) {
 
 
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.cache.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL())
          .setDescription(`**Found ${message.guild.members.cache.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL())
.setTimestamp();
message.channel.send(embed)
 
}})

client.on("message", message => {
  if (message.channel.type === "dm") {
    if (message.content.startsWith("https://discord.gg/")) {  
message.author.send(`**تـۆش ریکلام بۆ ئـەم سێرڤـەرە بکە **  
https://discord.gg/HYdBCmQXzV`); 
 
 
 
 
      client.channels.cache.get("862372446888001558").send(
 
        `>  send by <@${message.author.id}> 
${message.content}`
      );
    }
  }
  })

client.on("message", msg => {
    var args = msg.content.split(" ");
    var command = args[0];
    var emojisname = args[1];
    var emojislink = args[2];
    if (command === PREFIX + "addemoji") {
        if (!msg.guild){
            return msg.channel.send("Only SERVER Commands");
        }
        if (!msg.guild.member(client.user).hasPermission("MANAGE_EMOJIS")){
            return msg.channel.send("لا تتوفر لدى البوت صلاحية  `MANAGE_EMOJIS`");
        }
        if(!msg.guild.member(msg.author).hasPermission("MANAGE_EMOJIS")) {
            return msg.channel.send("لا تتوفر لديك صلاحيات `MANAGE_EMOJIS`");
        }
        if(!emojisname){
            return msg.channel.send("يرجى ادراج اسم الايموجي");
        }
        if (!emojislink){
            return msg.channel.send("يرجى ادراج رابط الايموجي");
        }
        msg.guild.emojis.create(emojislink, emojisname).then(emoji =>{
            msg.channel.send("Emoji Created . <:"+emoji.name+":"+emoji.id+">")
        }).catch(err => msg.channel.send("يجب ان يكون حجم الصورة اقل من `256` كيلوبايت"));
    }

});

client.on("message", message => {
  var args = message.content.split(" ").slice(1);
  var msg = message.content.toLowerCase();
  if (!message.guild) return;
  if (!msg.startsWith(PREFIX + "role")) return;
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(" **ليس لديك صلاحيات :rolling_eyes:**");
  if (msg.toLowerCase().startsWith(PREFIX + "rerole")) {
    if (!args[0])
      return message.reply("**:x: يرجى وضع الشخص المراد سحب منه الرتبة**");
    if (!args[1])
      return message.reply("**:x: يرجى وضع الرتبة المراد سحبها من الشخص**");
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: يرجى وضع الرتبة المراد سحبها من الشخص**");
    if (message.mentions.members.first()) {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          " اانت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.mentions.members.first().removeRole(role1);
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم سحب من **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members.forEach(m => m.removeRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم سحب من الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.removeRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم سحب من البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.removeRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم سحب من البشريين رتبة**"
      );
    }
  } else {
    if (!args[0])
      return message.reply("**:x: يرجى وضع الشخص المراد اعطائها الرتبة**");
    if (!args[1])
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطائها للشخص**");
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطائها للشخص**");
    if (message.mentions.members.first()) {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.mentions.members.first().addRole(role1);
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم اعطاء **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );
      message.guild.members.forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء البشريين رتبة**"
      );
    }
  }
});

    client.on("guildCreate" , AQUAMAN => {
  if(AQUAMAN.memberCount < 90){
    console.log(`  name ( ${AQUAMAN.name} ) zhmaray memberakan ( ${AQUAMAN.memberCount}) created by AQUAMAN`)//by AQUAMAN
    AQUAMAN.leave();
  }
})

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.startsWith(PREFIX + "setstats")) {
    if (!msg.guild.member(msg.author).hasPermission("MANAGE_CHANNELS"))
      return msg.reply("❌ **go play minecraft**");
    if (!msg.guild.member(client.user).hasPermission(["MANAGE_CHANNELS"]))
      return msg.reply("❌ **البوت لا يمتلك صلاحية**");
    var ggg = msg.guild.createChannel("SERVER STATS", "category").then(kk => {
      var ccc = msg.guild.createChannel("SERVER STATS", "voice").then(al => {
        var aa = msg.guild.createChannel("SERVER STATS", "voice").then(alp => {
          var aaa = msg.guild
            .createChannel("SERVER STATS", "voice")
            .then(alph => {
              al.setParent(kk);
              alp.setParent(kk);
              alph.setParent(kk);

              al.overwritePermissions(msg.guild.id, {
                CONNECT: false,
                SPEAK: false
              });
              alp.overwritePermissions(msg.guild.id, {
                CONNECT: false,
                SPEAK: false
              });
              alph.overwritePermissions(msg.guild.id, {
                CONNECT: false,
                SPEAK: false
              });
              setInterval(() => {
                var currentTime = new Date(),
                  hours = currentTime.getHours() + 3,
                  minutes = currentTime.getMinutes(),
                  Seconds = currentTime.getSeconds(),
                  Year = currentTime.getFullYear(),
                  Month = currentTime.getMonth() + 1,
                  Dat = currentTime.getDate();
                if (minutes < 10) {
                  minutes = "0" + minutes;
                }
                var suffix = "AM";
                if (hours >= 12) {
                  suffix = "PM";
                  hours = hours - 12;
                }
                if (hours == 0) {
                  hours = 12;
                }
                al.setName(
                  `Voice Online :[ ${
                    msg.guild.members.filter(m => m.voiceChannel).size
                  } ]`
                );
                alp.setName(
                  `Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`
                );
                alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
              }, 1000);
            });
        });
      });
    });
  }
});

const channelid = "865128583810777118"    //id channele vc
client.on("ready", () => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
});
client.on("message", serverdevelopment => {
  if (!serverdevelopment.content.startsWith(PREFIX) || serverdevelopment.author.bot) return;
  const args = serverdevelopment.content.slice(PREFIX.length).trim().split(' ');
  const command = args.shift().toLowerCase();
if(command === "trans"){
    serverdevelopment.channel.send(
      new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
.setColor("#9700ff")
      .setTitle('Your Translation Search!')
      .setURL(`https://translate.google.iq/?hl=ar&sl=ar&tl=en&text=${args}&op=translate`)
    );
  }
});

client.on('message', msg => {
    var args = msg.content.split(" ").slice(1).join("")
    if (msg.content.startsWith(PREFIX + 'setstorage')) {
    if (!args) return msg.reply("**You Didn't Add The Storage ID**")
      db.set(`${msg.guild.id}store` , args)
    msg.reply("**Storage Updated!**")
    } 
}).on('message', msg => {
    var args = msg.content.split(" ").slice(1).join("")
    if (msg.content.startsWith(PREFIX + 'store'))
     {
       if (!args) return;
      client.channels.cache.get(db.get(`${msg.guild.id}store`)).send(args)
    msg.delete()
    } 
})

client.on('message', function(message) {
    if(message.content.startsWith(PREFIX  + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
   let mUser = message.mentions.members.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.MessageEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("If the reporting was a joke, the person reporting would be subject to penalties")
message.channel.send(Rembed)
message.channel.send("Sended Your report to  report Channel").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});


client.on("message", message => {
  if (!message.content.startsWith(PREFIX)) return;
  if (!message.channel.guild)
    return 
  let command = message.content.split(" ")[0];
  command = command.slice(PREFIX.length);
  if (command === "g") {
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
      msg.edit('    **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 1000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 2000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 3000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 4000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <:slots2:421472583347732511> <:slots1:421472583410515969> <:slots3:421472582924238869>                                                                               `|         ||         |` ');
      }, 5000);
      msg.delete(6000);
      message.delete();
    });
    message.channel
      .send("**** The crime has been successfully hidden 🕳 **")
      .then(msg => msg.delete(7000));
  }
});

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "roleuser")) { 
 
let member_r = message.mentions.members.first() || message.member,
  user = member_r.user;
let bawan= new Discord.MessageEmbed()
  .addField('this member have this Roles:', member_r.roles.cache.map(r => `${r}`).join(', '), true)
 
message.channel.send(bawan)
}})

let Prefix = "+"; 

client.on("message", async message => {
let prefix2 = await db.fetch(`prefix_${message.guild.id}`);
if (prefix2 === null) prefix2 = Prefix;
const prefix = prefix2;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();
if (cmd === "prefix" || cmd === "setprefix") {
if (!message.guild) return;
if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
return message.reply("**- You Don't Have `ADMINISTRATOR` Permission.**");
if (!args[0]) return message.channel.send(`**- Please tell me what a prefix !!**`);
if (args[0].length > 3) {
  return message.channel.send("**Please tell me prefix under 3 numbers!!**")
}
db.set(`prefix_${message.guild.id}`, args[0]);
message.channel.send(`**✅ Done, Set New Prefix \`[${args[0]}]\` From Your Server.**`);
}
if (cmd === "test") { // كود test للتجربة
message.reply("**Set Prefix Working ✅**")
}
});

 client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "sug")) {
  let args = message.content.split(" ").slice(1)
 
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
 
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
 
    if(!channel) {
      return message.channel.send("there is no channel with name - suggestions")
    }
 
 
    let embed = new Discord.MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#9700ff")
    .setDescription(args.join(" "))
    .setTimestamp()
 
 
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
 
 
 
    message.channel.send("Sended Your Suggestion to  Suggestions Channel")
 
  }
})

client.on('message', msg => {
 if (msg.content.startsWith(PREFIX + 'senddm')) {
 
   if(!msg.member.hasPermission('ADMINISTRATOR')) return
   let args = msg.content.split(' ').slice(1)
 
 
      if (!args[0]) return msg.channel.send(``)
      if (!args[1]) return msg.channel.send(``)
      let alpha = msg.mentions.members.first()
      if (!alpha) return msg.channel.send()
      let alphaEmbed = new Discord.MessageEmbed()
      .setTitle('AenGo is here')
      .setDescription(args.join(" "))
 
      client.users.cache.get(`${alpha.id}`).send(alphaEmbed)
      msg.channel.send('```DONE```')
    }
});


  
  client.on("message", message => {
  if (message.content === PREFIX + "open") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You dont have Perms `MANAGE CHANNELS`:x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: true
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel unhided**")
      .addField("Guild name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("#9700ff");
    message.channel.send(embed).then(bj => {
      bj.react("🔓");
    });
  }
});

client.on("message", message => {
  if (message.content === PREFIX + "close") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Dont Have Perms `MANAGE CHANNELS` :x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: false
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel hided**")
      .addField("Guild name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("#9700ff");
    message.channel.send(embed).then(bj => {
      bj.react("🔒");
    });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(PREFIX + "settopic")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**You need Administrator permission to use this command!**"
      );
    let topic = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!topic) return message.channel.send("**Shte bnwsa bo danany Topic**");
    message.channel.setTopic(topic);
    const embed = new Discord.MessageEmbed()
      .setTitle("**Done check Description channel**")
      .addField("Message", `${topic}`)
      .addField("Channel", message.channel.name)
      .addField("By", message.author.tag)
      .setColor("#9700ff")
      .setFooter("BY AenGo bot ");
    message.channel.send(embed);
  }
});

     client.on("message", message => {
  if (message.content.startsWith(PREFIX + "slots")) {
    let slot1 = ["🍏", "🍇", "🍒", "🍍", "🍅", "🍆", "🍑", "🍓"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1 === slots2 && slots2 === slots3) {
      we = "Win!";
    } else {
      we = "Lose!";
    }
    message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`);
  }
});


 client.on('message', message => { 
  if (!message.channel.guild) return;
if(message.content == PREFIX + 'count') 
var Black = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setFooter(message.author.username, message.author.avatarURL())
.setTitle('Info server ',`__${message.guild.name}__`)
.addField('Total Bost',`__${message.guild.memberCount}__`)
message.channel.send(Black);
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

client.on('message', message => {
if(message.content.startsWith(PREFIX + "stone")) {
let slot1 = ['✂paper📄', '🗿stone🗿', '✂scissors📄'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮Play Again🎮"
} else {
we = "😣She lost the luck of Over😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});

client.on('message', message => {
if(message.content.startsWith(PREFIX + "scissors")) {
  let slot1 = ['✂paper📄', '🗿stone🗿', '✂scissors📄'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮Play Again🎮"
} else {
we = "😣She lost the luck of Over😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});

client.on('message', message => {
if(message.content.startsWith(PREFIX + "paper")) {
  let slot1 = ['✂paper📄', '🗿stone🗿', '✂scissors📄'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮Play Again🎮"
} else {
we = "😣She lost the luck of Over😣"
}
message.channel.send(`${slots1} - ${we}`)
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
  if (command === "m") {
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
      .setColor("#9700ff")
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
        .setColor("#9700ff")     
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
.setColor("#9700ff")
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
.setColor("#9700ff")
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
           .setFooter('AenGo ')
        .setColor("#9700ff")
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
      .setColor(`#9700ff `);
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
.setFooter('create bym ')
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
  if (message.content.startsWith(PREFIX+ "girl")) {
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
  if (message.content.startsWith(PREFIX + "couple")) {
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

  if(message.content.startsWith(`${prefix}t`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("", "")
    .setThumbnail(` `)
    .setLabel("Yes")
    .setStyle("green")
    .setID("yes")
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`kkk`)
    //send the Message
    message.channel.send(embed)
    message.react("<a:emoji_81:830444292111204382>")
  } 

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
 <@701546840063082601>

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
 client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("870341021186265188");
  let embed = new MessageEmbed().setColor("#ff0000")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `✅ Join Server`)
  .addField("🔠 **Server Name**", `${guild.name}`)
  .addField("👑 **Server Owner**", `${guild.owner}`)
  .addField("🆔 **Server Id**", `${guild.id}`)
  .addField("👥 **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});

client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("870341021186265188");
  let embed = new MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `❌ Left Server`)
  .addField("🔠 **Server Name**", `${guild.name}`)
  .addField("👑 **Server Owner**", `${guild.owner}`)
  .addField("🆔 **Server Id**", `${guild.id}`)
  .addField("👥 **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});

function delay(delayInms) {
 return new Promise(resolve => {
   setTimeout(() => {
     resolve(2);
   }, delayInms);
 });
}
