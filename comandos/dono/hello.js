const Discord = require('discord.js')     // Puxando a livraria discord.js
const { authorid } = require('../../config')  // Puxando o arquivo config.js

module.exports = {
    name: 'hello',   // Setando nome para o comando
    aliases: ['ola', 'hi'],   // Setando sinônimos para o comando, para não ter nenhum coloque apenas []
    run: async (client, message, args) => {

        // Privando o comando apenas para o criador do bot
        if (authorid !== message.author.id) return message.channel.send(`${message.author}, apenas meu criador pode utilizar este comando!`)

        // Enviando resposta no canal
        message.channel.send('Fala meu chapa!')

    }
}