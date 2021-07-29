'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hikers', [
      {
        firstName: "Roger Rabbit",
        birthday: "1981-02-01"
      },
      {
        firstName: "Hannibal Lecter",
        birthday: "1933-01-20"
      },
      {
        firstName: "Robert Hansen",
        birthday: "1939-02-15"
      },
      {
        firstName: "Ricardo Ramirez",
        birthday: "1960-02-29"
      },
      {
        firstName: "Ted Bundy",
        birthday: "1926-11-24"
      },
      {
        firstName: "Christen Gilbert",
        birthday: "1967-11-13"
      },
      {
        firstName: "Lavinia Fisher",
        birthday: "1793-11-02"
      },
      {
        firstName: "Waneta Hoyt",
        birthday: "1946-05-13"
      },
      {
        firstName: "Myra Hindley",
        birthday: "1942-07-03"
      },
      {
        firstName: "Rosemary West",
        birthday: "1953-11-29"
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
 return queryInterface.bulkDelete('Hikers', {}, null)
  }
};
