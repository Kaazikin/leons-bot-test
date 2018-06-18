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
    
    
    if (message.content === "hellagay") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://cdn.discordapp.com/attachments/423594008984682508/443586963203948554/Below_is_gay.png")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
   }
    
  if (message.content === "imp") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/media/267321/subaru-impreza-22b-sti-archived-test-review-car-and-driver-photo-604299-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
   }
    
    if (message.content === "86") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://shop.mycustomhotwheels.com/wp-content/uploads/2017/07/Initial-D-Ae86-racing-decals-for-all-scale-model-cars.jpg?a788e6&a788e6")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
   }

      if (message.content === "subarute") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://i.redditmedia.com/ouU-tyDW9o5ub01FAbofi6O7LpXo4ZOgj_U82DY0Vcg.jpg?w=960&s=8c09b350d85a21db89252faf6a3baec3")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
   }

        if (message.content === "golf2") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://i.ytimg.com/vi/dmY9BkQGviE/maxresdefault.jpg")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
   }
    
          if (message.content === "sayorihang") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://vignette.wikia.nocookie.net/doki-doki-literature-club/images/2/2d/Sayori_Hanging_%28s_kill%29.png/revision/latest?cb=20171117231739")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
   }
    
           if (message.content === "justmonika") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnun3FeThwW0tgKszHsgDtqDwSbaA8odJue2nCcADAiKlMVsSbOQ")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
   }
    
            if (message.content === "yuricut") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://i.pinimg.com/originals/f2/30/14/f23014ff767d2af16454963f1e0cd226.jpg")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
   }
    
             if (message.content === "natsukisnap") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://i.ytimg.com/vi/A1RUsBluw4U/hqdefault.jpg")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
   }
    
                if (message.content === "gremlin") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://cbsnews3.cbsistatic.com/hub/i/r/2011/04/21/116ba1e3-a643-11e2-a3f0-029118418759/resize/620x465/65a2ff5281e84d447cbec15f678d797c/gremlin.jpg")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
   }
    
               if (message.content === "chervette") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://upload.wikimedia.org/wikipedia/commons/f/f6/1978_chevette.JPG")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
   }
    
                  if (message.content === "aztek") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2002-05_Pontiac_Aztek.jpg/1200px-2002-05_Pontiac_Aztek.jpg")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
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
                 if (message.content === "sushi") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("http://i0.kym-cdn.com/photos/images/original/001/216/152/574.jpg")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
   message.channel.send(embed)
   }
                    if (message.content === "wikihow") {
                             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   let embed = new Discord.RichEmbed()
  .setImage("http://i0.kym-cdn.com/photos/images/original/001/070/708/b46.jpg")
           .setColor(randomColor)
              .setFooter(`${message.createdAt}`);
  message.channel.send('Please WikiHow, Dont')
    message.channel.send(embed)
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
 //carlist   
            if(message.content.startsWith(prefix + 'carlist')){
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const embed = new Discord.RichEmbed()
.setTitle("LeonsTestingBot likes cars, here have a list of some cars")
.addField('imp', 'Subaru Impreza STI')
.addField('86', 'AE86 Panda Trueno')
.addField('subarute', 'Mighty Car Mods Subaru 02 Impreza WRX STI Ute')
.addField('golf2', 'VolksWagen Golf MK2')
.addField('gremlin', 'AMC Gremlin')
.addField('chervette', 'Chevy Chervette')
.addField('aztek', 'Pontiac Aztec')
.addField('coming soon', 'coming soon')
.setFooter(`${message.createdAt}`)
.setColor(randomColor);
message.author.send(embed);
message.channel.send('Car list has been sent ot your DMs :mailbox_with_mail:')
}
//ddlc menu    
        if(message.content.startsWith(prefix + 'ddlc')){
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const embed = new Discord.RichEmbed()
.setTitle("LeonsTestingBot cares about all the dokis, so have some dokis")
.addField('sayorihang', 'Oh no this cant be happening, we did leave her hanging a bit!')
.addField('justmonika', 'a just monika text box')
.addField('yuricut', 'Yuri, put away that knife')
.addField('natsukisnap', 'PLAY WITH ME!')
.setFooter(`${message.createdAt}`)
.setColor(randomColor);
message.author.send(embed);
message.channel.send('dokis have been sent to your DMs :mailbox_with_mail:')
}
//quotes menu 
            if(message.content.startsWith(prefix + 'quotes')){
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const embed = new Discord.RichEmbed()
.setTitle("LeonsTestingBot likes quotes, have some handpicked quotes")
.addField('oil', 'a car oil quote')
.addField('heroes', 'a hero quote')
.addField('avicii', 'quote from Wake me Up by Avicii')
.addField('hungry', 'food please')
.addField('quote', 'leon needs a quote')
.addField('henlo', 'just a typo')
.setFooter(`${message.createdAt}`)
.setColor(randomColor);
message.author.send(embed);
message.channel.send('Handpicked quotes have been sent to your DMs :mailbox_with_mail:')
}


//responses   
             if(message.content.startsWith('hello')){
message.channel.send(':wave:')
               message.channel.send('hey!')
}
                  if(message.content.startsWith('gm')){
message.channel.send('Goodmorning :sunrise:')
                  }
    
        if(message.content.startsWith('gn')){
message.channel.send('goodnight')
          message.channel.send(':crescent_moon:')
}
    
       if(message.content.startsWith('bye')){
message.channel.send('goodbye')
         message.channel.send(':wave:')
}
    
       if(message.content.startsWith('stop')){
message.channel.send('Stop it,')
message.channel.send('get some help!')
}
    
//music related stuff
       if(message.content.startsWith('mp3')){
message.channel.send('no track loaded')
message.channel.send('**<<**  ||  >  **>>** ')
}
    
          if(message.content.startsWith('play some music')){
message.channel.send('NO!')
message.channel.send('just use a music bot')
}

//quotes
          if(message.content.startsWith('oil')){
message.channel.send('If there is no oil under the car, There is no oil in the car!')
}

              if(message.content.startsWith('heroes')){
message.channel.send('"Lets be heroes, we’re all heroes or our own story"-Handsome Jack')
}
    
              if(message.content.startsWith('avicii')){
message.channel.send('"life`s a game and love is a prize" - Avicii')
}
    
                  if(message.content.startsWith('hungry')){
message.channel.send('"Im hungry" -Jade')
}
                      if(message.content.startsWith('quote')){
message.channel.send('"I need a quote" -Leon')
}
                          if(message.content.startsWith('henlo')){
message.channel.send('"Henlo? Hello!"')
}
                              if(message.content.startsWith('lol')){
message.channel.send('Lol')
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