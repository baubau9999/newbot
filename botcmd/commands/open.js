const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: "close",
    cooldown: 5,
    aliases: ["end"],

    run: async function(client, message, args) {
        try {
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
            var nameer = `ticket-${message.author.username}`
            var checkTickets = message.guild.channels.cache.find(c => c.name == nameer.split(' ').join('-').toLocaleLowerCase())
            if (checkTickets) {
                message.channel.send({
                    embed: {
                        color: 0xFF0000,
                        title: `**❌ | Lỗi**`,
                        description: `Bạn đã có một vé mở trước đó`
                    }
                }).then(async function(m) {
                    setTimeout(() => {
                        m.delete()
                    }, 1000 * 7);
                })
                return
            }
            var check = require('quick.db').fetch(`TicketAdminRole_${message.guild.id}`);
            if (check == null || !check) {
                message.channel.send({
                    embed: {
                        color: 0xFF0000,
                        title: `**❌ | Error**`,
                        description: `Yo
Bạn phải thiết lập hệ thống vé bằng lệnh này: \`${prefix}setup\``
                    }
                }).then(async function(m) {
                    setTimeout(() => {
                        m.delete()
                    }, 1000 * 7);
                })
                return
            }
            let btn = new MessageButton()
                .setStyle("green")
                .setEmoji("✅")
                .setID("createTicketTrue");
            let btn2 = new MessageButton()
                .setStyle("grey")
                .setEmoji("⛔")
                .setID("createTicketFalse");
            let row = new MessageActionRow()
                .addComponent(btn)
                .addComponent(btn2);
            message.channel.send({
                embed: {
                    title: `**⚠️ | Xác Nhận**`,
                    description: `Bạn có chắc chắn về việc tạo một vé mới không?`,
                    color: 0xFFF200
                },
                component: row
            }).then(async function(msg) {
                message.react('💌')
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
                require('quick.db').set(`DeleteOpen_${message.channel.id}`, msg.id)
            })
        } catch (err) {
            return;
        }
    }
}
