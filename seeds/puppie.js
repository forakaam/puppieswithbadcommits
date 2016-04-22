exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('puppies').del(),
    knex('puppies').insert({id: 1, name: 'spot', breed: "lab",age:1}),
    knex('puppies').insert({id: 2, name: 'pup', breed: "boxer",age:3}),
    knex('puppies').insert({id: 3, name: 'fido', breed: "pug",age:1}),
  ]);
};
