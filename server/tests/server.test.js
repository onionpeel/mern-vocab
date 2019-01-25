const expect = require('chai').expect;
const request = require('supertest');
const app = require('./../server');
const {Word} = require('./../models/Word');
const {words, populateWords} = require('./seed/seed');

beforeEach(populateWords);

describe('POST /api/words', function() {
  it('should create a new word', async function() {
    const term = '歩く';
    const definition = 'to walk';
    try{
      await request(app)
        .post('/api/words')
        .send({term, definition})
        .expect(200)
        .expect(res => {
          expect(res.body.term).to.equal(term);
          expect(res.body.definition).to.equal(definition);
        });

      const words = await Word.find({term, definition});
      expect(words.length).to.equal(1);
      expect(words[0].term).to.equal(term);
    }catch(e) {
      throw e;
    };
  });
});

describe('GET /api/words', function() {
  it('should return all the words', async function() {
    try{
      await request(app)
        .get('/api/words')
        .expect(200)
        .expect(res => {
          expect(res.body.length).to.equal(2)
        })
    }catch(e) {
      throw e;
    }
  });
});

describe('DELETE /api/words/:id', function() {
  it('should delete the specified word', async function() {
    try{
      const id = words[0]._id.toHexString();
      const term = words[0].term;

      await request(app)
        .delete(`/api/words/${id}`)
        .expect(200)
        .expect(res => {
          expect(res.body.term).to.equal(term);
        });

      const wordsList = await Word.find();
      expect(wordsList.length).to.equal(1);
    }catch(e) {
      throw e;
    }
  });
});

describe('PATCH /api/populateWords/:id', function () {
  it('should update the specified word', async function() {
    try{
      const id = words[0]._id.toHexString();
      const term = "神社";
      const wordDescription = words[0].quantity;

      await request(app)
        .patch(`/api/words/${id}`)
        .send({term})
        .expect(200)
        .expect(res => {
          expect(res.body.term).to.equal(term);
        });

        const wordsList = await Word.find();
        expect(wordsList[0].description).to.equal(wordDescription);
    } catch(e) {
        throw e;
    };
  });
});
