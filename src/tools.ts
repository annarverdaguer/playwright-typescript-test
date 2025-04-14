import { soldPetsListType } from "./types";

export function getYearFromText(text: string): string | null {
    const yearMatches = text.match(/\b\d{4}\b/g);
    return yearMatches && yearMatches.length >= 2 ? yearMatches[1] : null;
}

export function listSoldPets(soldPetsJSON: soldPetsListType = []): soldPetsListType {
    let soldPets = soldPetsJSON.map(({ id, name }) => ({ id, name }));
    soldPets = soldPets.filter(pet => typeof (pet.name) === 'string')
    return soldPets;
} 