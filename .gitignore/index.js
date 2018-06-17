const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('🐢')

bot.on('ready', function() {
    bot.user.setGame("Command: 🐢help");
    console.log("Connectedç")
});

bot.login("NDU2NDI1MTkzODg0MzUyNTI3.DgfPVg.ytC_pP_t4qtf-xfC-hFKJ93Zwu4");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: 🐢help, Ping, Salut");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour");
        console.log("commande Salut sffectué");
    }

    if (message.content === "Ping"){
        message.reply("Pong");
        console.log("commande Ping sffectué");
    }
});
