const MessageButton = require('discord-buttons');
const Discord = require('discord.js');
const ee = require("../../botconfig/embed.json");
const client = new Discord.Client();
const disbut = require("discord-buttons");

const { MessageMenuOption, MessageMenu } = require("discord-buttons");
 
 module.exports = {
    name: "help",
    cooldown: 5,
    aliases: ["commands", "auda"],
 
run: async (bot, message, args) => { //async
      //--------------------------------------S T A R T--------------------------------------//
 
      message.react('887650847327158343');


                const embed = new Discord.MessageEmbed()
                .setTitle(`Tickets Premium`)
                .setFooter(ee.footertext, ee.footericon)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`_**Chọn Menu Bên Dưới Để Được Hỗ Trợ**_\n🏠 - Home Page\n🎟️ - Ticket Cpmmand \n❔ - Premium Features\n📔 - Giới thiệu `)
                .setColor(`#0x2F3136`)

                const embed2 = new Discord.MessageEmbed()
                .setTitle(`Ticket Commands`)
                .setFooter(ee.footertext, ee.footericon)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**__Here Are My Commands:__**\n\`setup,\` \`transcript,\` \`rename,\` \`remove,\` \`ping,\` \`open,\` \`close\``)
                .setColor(`#0x2F3136`)

                const embed3 = new Discord.MessageEmbed()
                .setTitle(`My Premium Features`)
                .setFooter(ee.footertext, ee.footericon)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**Được Fix Bởi Táo Đẳng Cấp**`)
                .setColor(`#0x2F3136`)

                // Last embed
                const embed4 = new Discord.MessageEmbed()
                .setTitle(`About Me`)
                .setFooter(ee.footertext, ee.footericon)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**By Tao Dang Cap **\n Cảm ơn bạn đã dùng BOT \n~ Ticket Bot\n\n**I was Made by, \`!                            Táo#7777\`!\n\nJoin my support [server](https://discord.gg/JaUuaQvM5C)**`)
                .setColor(`#0x2F3136`)

        let option1 = new MessageMenuOption()
        .setLabel('Home Page')
        .setValue('option1')
        .setEmoji("🏠")
        .setDescription('View All Commands')

        let option2 = new MessageMenuOption()
        .setLabel('Commands')
        .setValue('option2')
        .setEmoji("🎫")
        .setDescription('View Premium Ticket Commands')

        let option3 = new MessageMenuOption()
        .setLabel('Features')
        .setValue('option3')
        .setEmoji("❓")
        .setDescription('View My Premium Features')
  
      let option4 = new MessageMenuOption()
        .setLabel('About Me')
        .setValue('option4')
        .setEmoji("📔")
        .setDescription('View My About')
  

        let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Ticket Bot Menu')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4)

        const Sendmenu = await message.channel.send(embed, select);

        let collector = Sendmenu.createMenuCollector(b => b, { time : 60000 });
 
    collector.on("collect" , (b) => {
      
        if(b.clicker.user.id !== message.author.id)
              return b.reply.send(`❌ **Chỉ <@${message.author.id}> Được cho phép làm React!**\n**Tip**: \`Để sử dụng lệnh này, Gõ lệnh Help Để Được Biết Thêm\``, true)  

      
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }
 b.reply.defer();
 
 
        
    })
 
    collector.on("end", (b) => {
        Sendmenu.edit(new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription("Menu trợ giúp này đã hết hạn! Vui lòng gõ lại \`Help Command\`")
        .setFooter("ee.footertext, ee.footericon"))
    })

    }
}
