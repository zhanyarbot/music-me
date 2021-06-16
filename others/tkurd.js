module.exports = {
    name: "tkurd",
    aliases: ['t'],
    description: "Rates a user",
    execute(message, args, client) {
      let number = Math.floor(Math.random()*11);
      if (!args[0]){
          return message.channel.send(` ھۆگری کەس مەبن لێرە مرۆڤەکان ناگەن بە یەکتری تەنھا دەبنـە خاوەنی دڵی یەکتری `);
      }
      else {
        let user = message.mentions.users.first();
        if(user){ 
          message.channel.send(`ڕەنگە ھیچ کات خۆشیان نەویستبین ڕەنگە تەنھا برینەکانی خۆیان بە ئێمە چاک کردبێتەوە  `);
        }else{
        if(!user){
          let author = message.author;
            var use = args[0];
            var mem = client.users.cache.get(use);
            if(message.guild.member(mem)){
               return message.channel.send(`بـمرێ ئـەو دڵەیی تەنھا بـەناو ھێنانت پڕ دەبێ `);
            }
            else {
              return message.channel.send(`خـەڵک بۆ یەکتری وتـۆش بۆ من `);
              }
           } else {
           return message.channel.send(`${author} Please mention a user to`);
           }
        }
         
      }
    }
  };
