import { test, expect } from '@playwright/test';
import { createUser, getSoldPets } from '../src/petStoreService.ts';
import { listSoldPets } from '../src/tools.ts'
import { PetNameCounter } from '../src/PetNameCounter.ts';


test('[2nd Exercise] Check user creation', async ({ request }) => {
  const createUserResponse = await createUser(request);
  expect(createUserResponse).toBeOK();
});

test('[2nd Exercise] Check pets that are sold & share name', async ({ request }) => {
  const petsSoldResponse = await getSoldPets(request)
  expect(petsSoldResponse).toBeOK();

  const soldPets = listSoldPets(await petsSoldResponse.json());
  expect(soldPets).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: expect.any(Number), name: expect.any(String) })
    ])
  );

  const pets = new PetNameCounter(soldPets)
  const nameFrequencyList = pets.listNameFrecuency()
  for (const [key, value] of nameFrequencyList.entries()) {
    expect(typeof key).toBe('string');
    expect(typeof value).toBe('number');
  }
});

