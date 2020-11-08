const Discord = require('discord.js')     // Puxando a livraria discord.js

module.exports = {
    name: 'ping',   // Setando nome para o comando
    aliases: ['latencia', 'latência'],   // Setando sinônimos para o comando, para não ter nenhum coloque apenas []
    run: async (client, message, args) => {

        // Setando valor de ping como o ping atual do bot
        let ping = client.ws.ping

        // Criando uma embed
        let embed = new Discord.MessageEmbed()
        .setTitle('Ping!')
        .setDescription(`Meu ping atual é de: \`${ping}\`ms.`)

        // Enviando embed no canal
        message.channel.send(embed)

    }
}