const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "payment",
    cooldown: 7,
    aliases: ["pay", "ping"],
    run: async(client, message) => {
        try {
            if (message.author.bot) return;
            message.channel.send(
                new MessageEmbed()
                .setTitle(`Payment`)
      .setDescription(`>>> **- VPbank: 9288899999 
- NGUYEN VAN DUC**  

**  - Paypal: nguyenduc.dt8k55@gmail.com,
-   Văn Đức Nguyễn**

**  - MOMO: 0374099999,
- NGUYEN VAN DUC **

**  - MOMO: 0902889886,
- Lê Thị Kiều Nga **
  `)
             .setFooter(
        `Request By ${message.author.tag}`, 'https://styles.redditmedia.com/t5_yo4xr/styles/communityIcon_91eittug41081.png'
      )
            );
        } catch (err) {
            return;
        }
    }
};
