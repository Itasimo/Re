/**
 * 
 * 
 * 
 * @param {String} rawData - JSON preso dalla chiamata all'API di Axios
 * @returns {JSON} JSON contente tutti i voti e altre informzioni riguardanti essi
 * 
 */



module.exports = function parseVoti(rawData) {

    var result = []

    const tipoVotoLettere = ['T', 'S', 'G', 'O', 'P', 'A']
    const tipoVotoDesc = ['Tutti', 'Scritto', 'Grafico', 'Orale', 'Pratico', 'Altro']

    for (let i = 0; i < rawData.length; i++) {               // Lo so che è brutto, ma è solo per i due quadrimestri, quindi non dovrebbe causare problemi

        for (let j = 0; j < rawData[i].voti.length; j++) {

            let defPath = rawData[i].voti[j]

            let voto = {
                materia: defPath.descMat,
                tipoVoto: tipoVotoDesc[ tipoVotoLettere.indexOf( defPath.tipo ) ], // Converte la lettera in un tipo di voto leggibile
                voto: defPath.voto,
                peso: defPath.peso,
                data: defPath.data,
                commento: defPath.commento,
                professore: defPath.docente
            }

            result.push(voto)
        }

    }

    return result;
}