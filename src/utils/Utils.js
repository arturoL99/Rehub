export const findAnnunciInEvidenza = (annunci) => {
    const annunciInEvidenza = [];
    annunci.map((annuncio) => {
        annuncio.fields.inEvidenza ? annunciInEvidenza.push(annuncio) : console.log('');
    });
    return annunciInEvidenza;
};

export const sortAnnunci = (annunci) => {
    const conPosizione = annunci.filter(annuncio => annuncio.fields.posizione !== undefined);
    const senzaPosizione = annunci.filter(annuncio => annuncio.fields.posizione === undefined);
    conPosizione.sort((a, b) => a.fields.posizione - b.fields.posizione);
    return conPosizione.concat(senzaPosizione);
};