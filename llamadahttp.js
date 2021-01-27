const fetch = require('node-fetch');

(
    async() => {
        const solicitud = await fetch("", {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
                'User-Agent': 'nodejs/$(process.version)',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                palabra: "hola"
            })
        });

        const playload = await solicitud.json();
        console.log(playload);
    }
)();