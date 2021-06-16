const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "textpersian",
  aliases: ["text-persian","tp"],
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args) => {

let replies = ["کاش یه ربطه بسازن همش روزای اول باشه","اونی که صورتش مثل فرشته ها بود یه قلب لاشی داشت!","بعضیام مث رمز پویا هستن هر دو دیقه عوض میشن!.","هرکی از زندگیم حذف شده خودش قیچیو داده دستم ، از چی شاکی اید الان","ب بعضیا باس گفت: تو با کی نبودی؟ اینو بگو؟(:","من شاید عالی نباشم اما حداقل جعلی نیستم!","راه خودتونو با ذهن خودتون بسازید!","احمق بودن از اونجایی شروع میشه که میگی این با بقیه فرق داره!"];

let result = Math.floor((Math.random() * replies.length));


message.channel.send(replies[result]).then(message => {
            message.react('<a:emoji_91:842129244343369808>').then(r => {
                message.react('<a:emoji_94:842141553262460968>');
           });
          });
      }
}
