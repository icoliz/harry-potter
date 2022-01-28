function callToApi(AppSelect) {
  return fetch(`https://hp-api.herokuapp.com/api/characters/house/${AppSelect}`)
    .then((response) => response.json())
    .then((dataApi) => {
      // Clean data before using it
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
      }));
    });
}

export default callToApi;
