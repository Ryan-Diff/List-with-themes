export const getCharacters = async(page =1) => {
    const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?page=${page}`);
    const json = await res.json();

    if(!res.ok) throw 'Sorry about it';

    return json.map(character => ({
        id: character._id,
        name: character.name,
        image: character.image
    }));
};
