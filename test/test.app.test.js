const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app.js');
const psApp = require('../psApps')

describe('playstoreServer test', () => {
  it('should be an array ', () => {
    const sort = 'Rating'

    return supertest(app)
      .get('/apps')
      .query({ sort })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array')
      })
  })
  it('should filter by genres', () => {

    expect()
  })
  it('should sort if sort provided', () => {

  })
  it('should include the entire array if not filtered', () => {

  })
})