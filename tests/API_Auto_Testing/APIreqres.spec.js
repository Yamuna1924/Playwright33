const { test, expect } = require('@playwright/test');

test.describe('GET API Tests', () => {
    test('verify list users api-GET', async ({ request }) => {
        const getAllusers = await request.get('https://reqres.in/api/users?page=2', { headers: { 'x-api-key': 'reqres-free-v1' } })
        expect(getAllusers.ok()).toBeTruthy()
        expect(getAllusers.status()).toBe(200)
        const jsonresponse = await getAllusers.json()
        console.log(jsonresponse)
        const response = await getAllusers.json()
        expect(response.page).toBe(2)
        expect(response.per_page).toBe(6)

        expect(response).toHaveProperty("total_pages")

        //expect(response.total_pages).toBe(2)
        expect(response.data[0].email).toBe("michael.lawson@reqres.in")
        expect(response.data[2].id).toBe(9)
        expect(response.data[5].first_name).toBe("Rachel")
        expect(response.data[4].last_name).toBe("Edwards")

    });
    test('verify create user API -Post', async ({ request }) => {
        const url = 'https://reqres.in/api/users'
        const header = { "x-api-key": "reqres-free-v1" }
        const payload = {
            "name": "yamu",
            "job": "QA ENGINEER"
        }

        const createUser = await request.post(url,
            {
                headers: header,
                data: payload
            });
        expect(createUser.ok()).toBeTruthy()
        expect(createUser.status()).toBe(201)
        const response = await createUser.json()
        console.log(response)
        expect(response.name).toBe("yamu~")
        expect(response.job).toBe("QA ENGINEER")

        //can also do 
        //expect(response).toHaveJSProperty("id")
        //expect(response).toHaveJSProperty("createdAt")

        console.log(response.id)
        console.log(response.createdAt)

        





    });



});