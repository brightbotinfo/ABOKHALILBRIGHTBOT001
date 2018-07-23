
// 449421638199672852


const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!.'
const YTDL = require("ytdl-core");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('?[?????????????????????????????????????????????????????????????????]?')
  console.log(`[Start] ${new Date()}`);
  console.log('?[?????????????????????????????????????????????????????????????????]?')
  console.log('')
  console.log('?[????????????????????????????????????]?');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('?[????????????????????????????????????]?')
  console.log('')
  console.log('?[????????????]?')
  console.log(' Bot Is Online')
  console.log('?[????????????]?')
  console.log('')
  console.log('')
});
client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله وبركاته');
  }
});





client.on("message", message => {
    var prefix = "!.";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "مسح")) {
            if(!message.channel.guild) return message.reply('**عزيزي , هذه الأوامر فقط للسيرفرات**');				
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **   انت لست مشرفاً , لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(50)});
                          }

     
}); 


client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              
 let responses = [
        'كيف استطيع مساعدتك ؟',
        'my prefix is "**!.**"',
        ''
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});

 client.on("message", message => {
    if(message.content.startsWith(prefix + "السيرفر")) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**ليس لديك الرتبة مطلوبة لإستخدام هذا الامر ?**");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RANDOM")

.addField('**عدد اعضاء السيرفر ?? **' , `${message.guild.memberCount}`)
.addField('**اونر السيرفر ??**' , `${message.guild.owner.user.username}`)
.addField(`**الرومات :scroll: **`,true)
.addField(`# الكتابية`, `${message.guild.channels.filter(m => m.type === 'text').size}`)
.addField( `:loud_sound: الصوتية`,`${message.guild.channels.filter(m => m.type === 'voice').size}`)
.addField(`**عدد الرتب**:briefcase:`,`${message.guild.roles.size}`)
.addField(`?? Created On`, message.guild.createdAt ,true)
        message.channel.send({embed:embed})
    }
});
  


client.on('message', message => {
            if (message.content.startsWith('!.help')) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **=-=-=-=-=-=-=** ' ,'***__!.help-ar__*** == **لرسالة المساعدة بالــلغة العربية** ')
.addField('     **=-=-=-=-=-=-=** ' ,'!.***__help-en__*** == **For help message in English** ')
.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley:  شكراً لإستعمالك البوت**') 
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
     
client.on("message", message => {
      if (message.content === "!.السرعة") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('** : سرعة الإتصال هي**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});

client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['!.invite','!.help','!.help | !.دعوة','By Abo Khalil','يعمل بواسطة أبو خليل'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/GamerzBot`);
    }, ms);

});

client.on('message', message => {
  if (true) {
if (message.content === '!.invite') {
      message.author.send('**this is link bot**').catch(e => console.log(e.stack));
	  message.author.send('https://goo.gl/XPU7pV').catch(e => console.log(e.stack));
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === "!.دعوة") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField("تم بنجاح إرسال الرابط في الخاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

 client.on('message', message => {
            if (message.content.startsWith('report-info')) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
  .addField('     **=-=-=-=-=-=-=** ' ,'اهلا وسهلا بك')
  .addField('     **=-=-=-=-=-=-=** ' ,'| اذا كنت تريد ارسال ر سالة لصاحب البوت |')
  .addField('     **=-=-=-=-=-=-=** ' ,'| عليك التوجه لأحد السيرفرات التي يتواجد بها البوت |')
  .addField('     **=-=-=-=-=-=-=** ' ,'| وكتابة الأمر  |')
  .addField('     **!.report** ' ,'| **=-=-=-=-=-=-=**  |')
  .addField('     **كمثال** ' ,'| **=-=-=-=-=-=-=**  |')
  .addField('     **!.report السلام عليكم** ' ,'| **=-=-=-=-=-=-=**  |')
  .addField('     **وبهذه الطريقة سيتم ارسال الرسالة لصاحب البوت** ' ,'| **=-=-=-=-=-=-=**  |')
  .addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
  
  client.on('message', message => {
            if (message.content.startsWith('!.help-ar')) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
  .addField('     **=-=-=-=-=-=-=** ' ,'?[????????????????????????]?')
  .addField('     **=-=-=-=-=-=-=** ' ,'| A للأوامـر الـعامة اكتب |')
  .addField('     **=-=-=-=-=-=-=** ' ,'| B للأوامر المشرفين اكتب |')
  .addField('     **=-=-=-=-=-=-=** ' ,'| C للأوامر الميـوزك اكتب |')
  .addField('     **=-=-=-=-=-=-=** ' ,'| D للأوامر الــقران اكتب |')
  .addField('     **=-=-=-=-=-=-=** ' ,'| E لإضافة البــــوت اكتب |')
  .addField('     **=-=-=-=-=-=-=** ' ,'| F لمراسلة صاحب البوت اكتب |')
  .addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

/////////////////////////////////////////

client.on('message', message => {

  if (message.content.startsWith( prefix + "report")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("470347359285674004").send(
      "\n" + "**" + "? السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ? المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ? الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-en") {
		 if(!message.channel.guild) return message.reply('**dear , The Message only for server**');
		 message.channel.send('**dear , The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`

 **
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
   Prefix = ' !. '
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


--------------------------------
--------------------------------


=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
   Admin Commands
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

 ? ***kick*** <mention> <reson>
 
 ? ***clear*** <Number of messages to be deleted>

 ? ***bromassage*** <message> for send message all members in server
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
       General Commands
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

 => ***server*** for info server
 
 => ***help-en*** For help message in English
 
 => ***help-ar*** For help message in Arabic
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
   Thank you for using our bot
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
bot invite link: https://goo.gl/XPU7pV

==================================================================

`);

    }
});


client.on("message", message => {
    var prefix = "!.";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
            if(!message.channel.guild) return message.reply('**dear , The Message only for server**');				
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | ** You are not admin,sorry**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "deleted messages",
        color: 0x06DF00,
        description: "Successfully deleted messages ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 



function play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection);
        else connection.disconnect();
    })
}
var servers = {};
client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "play")) {
              let args = message.content.split(" ").slice(1);
    //play
    if (!args[0]) {
         message.channel.send("Please specify a link");
         return
    }
    if(!message.member.voiceChannel) {
        message.channel.sned("I think it may work better if you are in a voice channel!");
    }
    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    }
    var server = servers[message.guild.id];
    server.queue.push(args[0]);
    message.channel.send("Your song of choice is on the queue.` ")
    if(!message.member.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
    })
}

});

 client.on("message", message => {
    if(message.content.startsWith(prefix + "server")) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**You Don't Have Permission ?**");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RANDOM")

.addField('**Members ?? **' , `${message.guild.memberCount}`)
.addField('**Server Owner ??**' , `${message.guild.owner.user.username}`)
.addField(`**Channels :scroll: **`,true)
.addField(`# chats`, `${message.guild.channels.filter(m => m.type === 'text').size}`)
.addField( `:loud_sound:`,`${message.guild.channels.filter(m => m.type === 'voice').size}`)
.addField(`**Roles**:briefcase:`,`${message.guild.roles.size}`)
.addField(`?? Created On`, message.guild.createdAt ,true)
        message.channel.send({embed:embed})
    }
});



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "onsaybyabokhalil") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

  client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === 'botserver') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })
  
 client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "rroles"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
});

client.on('message', message => { 
     var prefix = "!."
    if (message.content.startsWith(prefix + 'emoji')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});
 
 client.on('message', message => { 
     var prefix = "!."
    if (message.content.startsWith(prefix + 'ايموجي')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? الايموجي') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

const moment = require('moment');
    client.on('message', message => {
          if (message.content.startsWith("!.info")) {
            if(!message.channel.guild) return message.reply('only for server')
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
       var heg;
       if(men) {
           heg = men
       } else {
           heg = message.author
       }
     var mentionned = message.mentions.members.first();
        var h;
       if(mentionned) {
           h = mentionned
       } else {
           h = message.member
       }
              moment.locale('ar-TN');
     var id = new  Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(message.author.avatarURL)
   .setAuthor(` ${message.author.username} `, message.author.avatarURL)
   .addField(': The date you entered the discord', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
   .addField(': The date you entered the server', `${moment(h.joinedAt).format('YYYY/M/D HH:mm')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
   .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
   message.channel.send(id)
}       });

    client.on('message', message => {
          if (message.content.startsWith("!.معلوماتي")) {
            if(!message.channel.guild) return message.reply('هذا الامر للسيرفرات فقط')
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
       var heg;
       if(men) {
           heg = men
       } else {
           heg = message.author
       }
     var mentionned = message.mentions.members.first();
        var h;
       if(mentionned) {
           h = mentionned
       } else {
           h = message.member
       }
              moment.locale('ar-TN');
     var id = new  Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(message.author.avatarURL)
   .setAuthor(` ${message.author.username} `, message.author.avatarURL)
   .addField(': تاريخ اول دخول لك في الديسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
   .addField(': تاريخ إنضمامك للسيرفر', `${moment(h.joinedAt).format('YYYY/M/D HH:mm')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
   .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
   message.channel.send(id)
}       });




client.on('message', message => {

if (message.author.bot) return;
    if (message.content === "!.اغلاق-الرومات") {
                        if(!message.channel.guild) return message.reply(' عزيزي , هذه الأوامر فقط للسيرفرات ');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**عزيزي , انت لست من المشرفين لتستعمل هذه الخاصية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**تم إقفال شات ? , ولا يمكن لأحد التحدث عدا المشرفين**")
           });
             }
if (message.content === "!.فتح-الرومات") {
    if(!message.channel.guild) return message.reply('**عزيزي , هذه الأوامر فقط للسيرفرات**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('يجب ان تكون مسؤول الرسائل , او ان تكون مشرفاً');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply(" تم فتح الشات ?, ويمكن للجميع التحدث الآن")
           });
             }



});

client.on('message', message => {

if (message.author.bot) return;
    if (message.content === "!.clallrom") {
                        if(!message.channel.guild) return message.reply('  ');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You Dont Have Permission ?**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("the chat is closed")
           });
             }
if (message.content === "!.opallrom") {
    if(!message.channel.guild) return message.reply('**dear , The Message only for server**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You Dont Have Permission ?**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
              message.reply("the chat is open")
           });
             }



});

client.on('message', message => {
    if (message.content === "!.الرومات") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**الرومات?**`)
        .addField('?  عدد الرومات في السيرفر?',`** ${message.guild.channels.size}**`)
        
.addField('?اسماء الرومات قائمة رومات السيرفر ?:',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.content === "!.roms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**الرومات?**`)
        .addField('the rom in server',`** ${message.guild.channels.size}**`)
        
.addField('the rom list ?:',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

client.on('message', async message => {
    let args = message.content.split(" ");
    let warns = JSON.parse(fs.readFileSync('./warnings.json' , 'utf8'));
      if(message.content.startsWith(prefix + "warn")) {
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No can do pal!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!wUser) return message.reply("Metion a member.");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot warn a staff member");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag , message.author.avatarURL)
  .setDescription(`\`\`\`\nWarnings: `+ warns[wUser.id].warns + '\nUserID: '+ wUser.id + '\n Reason: '+reason +'```')
  .setColor("#36393e")
  .addField('- Username',wUser,true)
  .addField('- Channel',message.channel,true)
  .setFooter(new Date());

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("I didn't find the needed channel. make a channel and name it: ``logs`` \n __Or you can change it through the bot file if you are the bot owner__");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole) return message.guild.createRole({
        name: "Muted",
        permissions: 0
    }).then(role => message.guild.channels.forEach(chan => {
    message.chan.overwritePermissions(role , {
       SEND_MESSAGES: false,
       ADD_REACTIONS: false,
       READ_MESSAGES_HISTORY: false
    });
    }));

    let mutetime = "1h";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id);
      message.reply(`<@${wUser.id}> has been unmuted.`);
    }, ms(mutetime));
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> has been banned.`);
  }
}
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`في امان الله اخي الغالي ..`)
    .addField('اصبح عدد السيرفر :',`**[ ${member.guild.memberCount} ]** عضواً`,true)
    .setColor('RED')
    .setFooter(`البوت اللامع :)`, '')

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
})

client.on('message', message => {
if (message.content.startsWith("kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("**قم بعمل منشن للشخص المراد طرده**");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("**تم طرد الشخص وتم ادراج رسالة طرد له في الخاص**: " + mention.tag);
};
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === 'A') {
		 message.channel.send('**عزيزي , تم إرسال رسالة المساعدة في الخاص**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
_ رسالة المساعدة العامة
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
|  لــمعرفة تفاصيل السيرفر  |
| ----    !.السـيرفر    ----|
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لمعرفة جميع رومات السيرفر |
| ----    !.الرومات    ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لمعرفة معلوماتك بالسيـرفر |
| ---    !.معلوماتي    ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لمعرفة معلوماتك بالسيـرفر |
| ---    !.ايمـــوجي   ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لمعرفة سرعة اتصال البــوت |
| ---    !.الســـرعة   ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لإضافة البوت في السيــرفرك |
| ---    !.دعوة   ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === 'a') {
		 message.channel.send('**عزيزي , تم إرسال رسالة المساعدة في الخاص**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
_ رسالة المساعدة العامة
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
|  لــمعرفة تفاصيل السيرفر  |
| ----    !.السـيرفر    ----|
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لمعرفة جميع رومات السيرفر |
| ----    !.الرومات    ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لمعرفة معلوماتك بالسيـرفر |
| ---    !.معلوماتي    ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لمعرفة معلوماتك بالسيـرفر |
| ---    !.ايمـــوجي   ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لمعرفة سرعة اتصال البــوت |
| ---    !.الســـرعة   ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لإضافة البوت في السيــرفرك |
| ---    !.دعوة   ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === 'b') {
		 message.channel.send('**عزيزي , تم إرسال رسالة المساعدة في الخاص**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
_ رسالة المساعدة للمشرفين _
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
|  لطرد شخـص مع ارسال السبب |
| ----    !.طـــــرد    ----|
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لحظر شخـص مع ارسال السبب |
| ----    !.حظـــر    ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
| لمسح عدد معين من الـرسائل |
| ---    !.مســـــح    ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لإغلاق الرومات وجعلها للمشرفين |
| ---    !.اغلاق-الرومات   ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| إغلاق الرومات وجعلها للمشرفين |
| ---    !.فتـح-الرومات   ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === 'B') {
		 message.channel.send('**عزيزي , تم إرسال رسالة المساعدة في الخاص**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
_رسالة المساعدة الخاصة بالمشرفين_
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
|  لطرد شخـص مع ارسال السبب |
| ----    !.طـــــرد    ----|
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لحظر شخـص مع ارسال السبب |
| ----    !.حظـــر    ---- |
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لمسح عدد معين من الـرسائل |
| ---    !.مســـــح    ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| لإغلاق الرومات وجعلها للمشرفين |
| ---    !.اغلاق-الرومات   ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
| إغلاق الرومات وجعلها للمشرفين |
| ---    !.فتـح-الرومات   ---- |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === 'c') {
		 message.channel.send('**عزيزي , تم إرسال رسالة المساعدة في الخاص**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
|  لتشغيل الصوتيات ويجب ادراج رابط  |
| ----    !.تشغيل    ----|
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === 'C') {
		 message.channel.send('**عزيزي , تم إرسال رسالة المساعدة في الخاص**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
|  لتشغيل الصوتيات ويجب ادراج رابط  |
| ----    !.تشغيل    ----|
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === 'd') {
		 message.channel.send('**عزيزي , تم إرسال رسالة المساعدة في الخاص**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
|  قريباً جداً بإذن الله تعالى   |
=-=-=-=-=-=-=-=-=-=-=-=-==-=-
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === 'D') {
		 message.channel.send('**عزيزي , تم إرسال رسالة المساعدة في الخاص**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
=-=-=-=--=-=-=-=-=-=-=-=-=-=-
|  قريباً جداً بإذن الله تعالى   |
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === 'e') {
		 message.channel.send('**عزيزي , تم إرسال رسالة المساعدة في الخاص**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  تفضل أخي الغالي رابط البوت
  | https://goo.gl/XPU7pV | 
=-=-=-=-=-=-=-=-=-=-=-=-=-=
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === 'E') {
		 message.channel.send('**عزيزي , تم إرسال رسالة المساعدة في الخاص**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  تفضل أخي الغالي رابط البوت
  | https://goo.gl/XPU7pV | 
=-=-=-=-=-=-=-=-=-=-=-=-=-=
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === '!.invite') {
		 message.channel.send('**عزيزي , تم إرسال الرابط في الرسائل الخاصة**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  تفضل أخي الغالي رابط البوت
  | https://goo.gl/XPU7pV | 
=-=-=-=-=-=-=-=-=-=-=-=-=-=
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === '!.دعوة') {
		 message.channel.send('**عزيزي , تم إرسال الرابط في الرسائل الخاصة**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  تفضل أخي الغالي رابط البوت
  | https://goo.gl/XPU7pV | 
=-=-=-=-=-=-=-=-=-=-=-=-=-=
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === 'f') {
		 message.channel.send('**عزيزي , تم إرسال رسالة المساعدة في الخاص**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
|  لمراسلة صاحب البوت قم بكتابة الأمر
  | !.info-report | 
  | سيقوم البوت بإعطاء امر وطريقة ارسالها | 
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === 'F') {
		 message.channel.send('**عزيزي , تم إرسال رسالة المساعدة في الخاص**');          
	

 message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  لمراسلة صاحب البوت قم بكتابة الأمر
  | info-report | 
  | سيقوم البوت بالتوضيح لك عن كيفقية ارسالها | 
=-=-=-=-=-=-=-=-=-=-=-=-=-=
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});
client.login(process.env.BOT_TOKEN);
