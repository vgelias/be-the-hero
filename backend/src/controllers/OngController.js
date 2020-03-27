const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);    
    },
        
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        // console.log(data);

        //return response.json({
        //evento: 'Semana OmniStack 11.0',
        //aluno: 'Vinicius Graciano Elias'
        //});

    return response.json({ id });
    }
};