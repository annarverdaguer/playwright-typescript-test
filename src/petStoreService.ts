const baseURL = 'https://petstore.swagger.io/v2'

export async function createUser(request) {
    const createUserBody = {
        "id": 0,
        "username": "anna.ruiz",
        "firstName": "Anna",
        "lastName": "Ruiz",
        "email": "anna.ruizverdaguer@gmail.com",
        "password": "123456",
        "phone": "666555444",
        "userStatus": 0
    }
    const createUserResponse = await request.post(`${baseURL}/user`, { data: createUserBody });
    return createUserResponse;
}

export async function getSoldPets(request) {
    const petsSoldResponse = await request.get(`${baseURL}/pet/findByStatus`, { params: { status: 'sold' } });
    return petsSoldResponse;
}