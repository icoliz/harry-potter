function callToApi(AppSelect) {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${AppSelect}`)
    .then((response) => response.json())
    .then((dataApi) => {
      return dataApi.map((char, index) => ({
        id: `${index}${char.dateOfBirth}`,
        image: char.image,
        name: char.name,
        house: char.house,
        alive: char.alive,
        gender: char.gender,
        species: char.species,
        alternateNames: char.alternate_names,
        birth: char.dateOfBirth,
        actor: char.actor,
      }));
    });
}

export default callToApi;
