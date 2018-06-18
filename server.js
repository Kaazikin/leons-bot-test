 const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
client.on("ready", async () => {
console.log(`${client.user.username} is online in ${client.guilds.size} servers!`);

  client.user.setActivity(`${client.guilds.size} servers! | q!help`, { type: 'PLAYING', });
});
  client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.splice(1);
  

    if(message.content.startsWith(prefix + 'test')){
message.channel.send(`${message.author.username} this bot works!!!`)
}

    if(message.content.startsWith(prefix + 'storetest')){
message.channel.send(`${message.author.username} this bot is stored at GitHub`)
}
  

     if (message.content === "wat") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://cdn.glitch.com/18273d7a-dad8-4858-b2a4-9430a409e305%2Fwat.PNG?1525351627598")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`)
   message.channel.send(embed)
   }
  

   if (message.content === "wat x3") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("http://i.imgur.com/CDQmEld.jpg")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`)
   message.channel.send(embed)
   }
    
    

                    if (message.content === "reee") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("http://i0.kym-cdn.com/photos/images/original/000/915/652/b49.gif")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
  message.channel.send('***REEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!!***')
   }

    
 //main helper   
    if(message.content.startsWith(prefix + 'help')){
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const embed = new Discord.RichEmbed()
.setTitle("LeonsTestingBot help and for all the commands put q! in front")
.addField('help', 'what you are seeing')
.addField('test', 'tests if the bot is working')
.addField('extra', 'shows u a list of extra shiny and nice features')
.addField('carlist', 'list of great cars to impress all your chat friends')
.addField('ddlc', 'some doki doki literature club things')
.addField('ship', 'Ship menu, use q!ship only!')
.addField('quotes', 'Quote list')
.setFooter(`${message.createdAt}`)
.setColor(randomColor);
message.author.send(embed);
message.channel.send('commands have been sent ot your DMs :mailbox_with_mail:')
}
//extra crap    
        if(message.content.startsWith(prefix + 'extra')){
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const embed = new Discord.RichEmbed()
.setTitle("LeonsTestingBot extra memz")
.addField('wat', 'wat woman')
.addField('wat x3', 'wat woman x3')
.addField('reee', 'pepe ree')
.addField('mp3', 'a simple mp3 player')
.addField('coming soon', 'coming soon')
.setFooter(`${message.createdAt}`)
.setColor(randomColor);
message.author.send(embed);
message.channel.send('extra commands have been sent ot your DMs :mailbox_with_mail:')
}

//responses   
             if(message.content.startsWith('hello')){
message.channel.send(':wave:')
               message.channel.send('hey!')
}

 
//invite 
            if(message.content.startsWith(prefix + 'invite')){
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const embed = new Discord.RichEmbed()
.setTitle("click here to invite me!")
.setURL("https://discordapp.com/oauth2/authorize?client_id=443569693345972234&permissions=8&scope=bot")
.setFooter(`LeonsTestingBot |  ${message.createdAt}`)
.setColor(randomColor);
message.channel.send("***Made By ***<@256396233655058452>***, With the help of ***<@434770808020402186>")
              message.channel.send("Want this bot to be in your server to?")
              message.channel.send("Wait a minute, ill give you a link to add me")
              message.channel.send("it should be around somewhere, Aah, i found it. there you go")
message.channel.send(embed)
message.channel.send('***Got any questions? Feel free to send a DM to the creator***')
}
// ship    
                if(message.content.startsWith(prefix + 'ship')){
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const embed = new Discord.RichEmbed()
.setTitle("**What the hell, are you serious, u cant put people in a box or a container. Whats wrong with you!**")
.setFooter(`LeonsTestingBot | ${message.createdAt}`)
.setColor(randomColor);
message.channel.send(embed)
}
    
//randomizer
    if (message.content.startsWith(prefix + 'random')){
 
 
  //                                       v number of possibiltys
  var result = Math.floor((Math.random() *  5) + 1);
  if (result == 1){
    message.channel.send("hungry")
  } else if (result == 2){
    message.channel.send("heroes")
  } else if (result == 3){
    message.channel.send("quote")

  } else if (result == 4){
     message.channel.send("oil")

    

} else  if  (result == 5){
           message.channel.send("henlo")
}
    

}
    
    if(message.content.startsWith(prefix + 'ping')){
 let ping = Math.floor(message.client.ping);

 message.channel.send(":ping_pong: Pong!")
 .then(m => {
      const embed = new Discord.RichEmbed()
.setImage('https://cdn.discordapp.com/attachments/439712863733415946/439769744468606978/loading.gif')
      .setDescription(`Ping Messages \`${m.createdTimestamp - message.createdTimestamp} ms\`\nPing DiscordAPI: \`${ping} ms\``)
  .setFooter(`LeonsTestingBot | ${message.createdAt}`)
      .setColor("#47bec6");

      m.edit({embed});
   
   if (message.content === "imp") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/media/267321/subaru-impreza-22b-sti-archived-test-review-car-and-driver-photo-604299-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`)
   message.channel.send(embed)
   }

     


});
}
    
  });
client.login(tokenfile.token);
