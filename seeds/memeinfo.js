
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('memes').del()
    .then(function () {
      // Inserts seed entries
      return knex('memes').insert([
        {id: 1, memetype: 'SeanBeanMeme', description: 'One Does Not Simply', photo: 'https://tinyurl.com/tqb24qc' },
        {id: 2, memetype: 'businesscat', description: 'Give me that report right meow', photo: 'https://tinyurl.com/uwd6udz' },
        {id: 3, memetype: 'Picradmeme', description: 'Picard doing a facepalm', photo: 'https://tinyurl.com/stpqkfv' }
      ]);
    });
};
