'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trails', [
      {
        trailName: 'Happy Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Grandfather Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Eno River Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Raven Rock Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Black Balsam Knob Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Patrick Mahomes Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Laurel Falls Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'West Palm Beach Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Lewis and Clark Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Applachian Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Coffee Mug Rock Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Potato Chip Rock Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Golden Falls Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Sante Fe Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
      },
      {
        trailName: 'Rough Ridge Trail',
        description: 'Lorem ipsum, dolor sit amet Andrew adipisicing elit. Molestiae natus, molestias deserunt Office John provident dolore Reed accusantium veritatis nulla! Mckenna amet cupiditate aspernatur Lachlan debitis magni earum Willie quis! Quis!'
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
