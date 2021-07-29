'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trails', [
      {
        trailName: 'Happy Trail'
      },
      {
        trailName: 'Grandfather Mountain Trail'
      },
      {
        trailName: 'Eno River Trail'
      },
      {
        trailName: 'Raven Rock Trail'
      },
      {
        trailName: 'Black Balsam Knob Trail'
      },
      {
        trailName: 'Patrick Mahomes Trail'
      },
      {
        trailName: 'Laurel Falls Trail'
      },
      {
        trailName: 'West Palm Beach Trail'
      },
      {
        trailName: 'Lewis and Clark Trail'
      },
      {
        trailName: 'Applachian Trail'
      },
      {
        trailName: 'Coffee Mug Rock Trail'
      },
      {
        trailName: 'Potato Chip Rock Trail'
      },
      {
        trailName: 'Golden Falls Trail'
      },
      {
        trailName: 'Sante Fe Trail'
      },
      {
        trailName: 'Rough Ridge Trail'
      }
    ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
