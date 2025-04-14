import { soldPetsListType } from "./types";

export class PetNameCounter {
    constructor(
        public pets: soldPetsListType
    ) { }

    public listNameFrecuency() {
        let nameCounter = new Map<string, number>();
        this.pets.forEach(soldPet => {
            let currentNameOcurrences = nameCounter.get(soldPet.name) || 0;
            nameCounter.set(soldPet.name, currentNameOcurrences + 1)
        });
        return nameCounter;
    }
}