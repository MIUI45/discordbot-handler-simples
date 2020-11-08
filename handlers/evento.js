const { readdirSync } = require("fs") // Puxando livraria fs

// Leitura dos eventos
module.exports = (client) => {
    console.log(`Carregando eventos...`);

    // Lendo pasta de eventos
    const load = dirs => {

        // Filtrando para apenas arquivos terminados em .js
        const events = readdirSync(`./eventos/${dirs}/`).filter(d => d.endsWith('.js'));

        // Lendo eventos
        for (let file of events) {
            const evt = require(`../eventos/${dirs}/${file}`);
            let eName = file.split('.')[0];
            client.on(eName, evt.bind(null, client));
        };
    };
 
    // Lendo categorias
    ["client", "guild"].forEach(x => load(x))

    console.log(`Eventos carregados.\n`)
};