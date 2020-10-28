export const getCharacters = async() => {
    const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters`);
    const json = await res.json();

    if(!res.ok) throw 'Sorry about it';

    return json.map(character => ({
        id: character._id,
        name: character.name,
        image: character.image
    }));
};
