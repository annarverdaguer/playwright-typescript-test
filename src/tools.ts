import { soldPetsListType } from "./types";

export function listSoldPets(soldPetsJSON: soldPetsListType = []): soldPetsListType {
    let soldPets = soldPetsJSON.map(({ id, name }) => ({ id, name }));
    soldPets = soldPets.filter(pet => typeof (pet.name) === 'string')
    return soldPets;
} 