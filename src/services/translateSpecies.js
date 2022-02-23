function translateSpecies(char) {
  if (char.species === 'human' && char.gender === 'male') {
    return 'Humano';
  } else if (char.species === 'human' && char.gender === 'female') {
    return 'Humana';
  } else if (char.species === 'half-giant') {
    return 'Medio gigante';
  } else if (char.species === 'werewolf') {
    return 'Hombre lobo';
  } else if (char.species === 'ghost') {
    return 'Fantasma';
  }
}

export default translateSpecies;
