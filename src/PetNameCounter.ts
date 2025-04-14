import { soldPetsListType } from "./types";

export class PetNameCounter {
    constructor(
        public pets: soldPetsListType
    ) { }

    public listNameFrecuency() {
        const nameCounter = new Map<string, number>();
        this.pets.forEach(soldPet => {
            const currentNameOcurrences = nameCounter.get(soldPet.name) || 0;
            nameCounter.set(soldPet.name, currentNameOcurrences + 1)
        });
        return nameCounter;
    }
}