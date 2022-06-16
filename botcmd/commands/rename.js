const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: "close",
    cooldown: 5,
    aliases: ["end"],

    run: async function(client, message, args) {
        try {
            var renameMessage = args.join(' ');
            if (!message.channel.name.includes("ticket-")) {
                message.channel.send({
                    embed: {
                        title: `**❌ | Lỗi**`,
                        description: `Đây Không Phải Ticket Chanel`,
                        color: 0xFF0000
                    }
                }).then(async function(msg) {
                    setTimeout(() => {
                        msg.delete().catch(err => { return })
                    }, 1000 * 7);
                })
                return
            }
            if (!message.member.hasPermission('MANAGE_CHANNELS')) {
                message.channel.send({
                    embed: {
                        title: `**❌ | Lỗi**`,
                        description: `bạn cần các quyền tương tự để sử dụng lệnh này`,
                        color: 0xFF0000
                    }
                }).then(async function(msg) {
                    setTimeout(() => {
                        msg.delete().catch(err => { return })
                    }, 1000 * 7);
                })
                return
            }
            if (!renameMessage) {
                message.channel.send({
                    embed: {
                        title: `**❌ | Lỗi**`,
                        description: `Bạn đéo có quyền để dùng lệnh này ô cây`,
                        color: 0xFF0000
                    }
                }).then(async function(msg) {
                    setTimeout(() => {
                        msg.delete().catch(err => { return })
                    }, 1000 * 7);
                })
                return
            }
            let btn = new MessageButton()
                .setStyle("green")
                .setEmoji("✅")
                .setID("renameTicketTrue");
            let btn2 = new MessageButton()
                .setStyle("grey")
                .setEmoji("⛔")
                .setID("renameTicketFalse");
            let row = new MessageActionRow()
                .addComponent(btn)
                .addComponent(btn2);
            message.channel.send({
                embed: {
                    title: `**⚠️ | Xác Nhận**`,
                    description: `Bạn có chắc chắn về việc đổi tên Ticket này không?`,
                    color: 0xFFF200
                },
                component: row
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
                require('quick.db').set(`RenameTicket_${message.channel.id}`, renameMessage)
                require('quick.db').set(`DeleteRenameMessage_${message.channel.id}`, msg.id)
            })
        } catch (err) {
            return;
        }
    }
}

