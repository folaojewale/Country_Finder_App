const supertest = require('supertest')
const express = require('express')

const app = express()
app.use(express.json())

describe('getCountry', () => {
  it("should respond with status code 200", async () => {
    const mockGetCountry = jest.fn()

    // Mock the 'getCountry' route with a callback function.
    app.get('/getCountry', (req, res) => {
      mockGetCountry(req, res)
    })

    mockGetCountry.mockImplementation((req, res) => {
      res.status(200).json({ name: 'Spain' })
    })

    const response = await supertest(app)
      .get('/getCountry?name=Spain')
      .expect(200)

    // Make assertions on the response if needed.
    expect(response.body.name).toBe('Spain')
  })
})
