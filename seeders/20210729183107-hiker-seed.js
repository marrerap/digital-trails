'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hikers', [
      {
        firstName: "Roger Rabbit",
        birthday: "1981-02-01",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "mckenna@onlydrinkscoldbrew.com",
        username: "useMyName"

      },
      {
        firstName: "Hannibal Lecter",
        birthday: "1933-01-20",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "cartman@southpark.com",
        username: "useMyName"
      },
      {
        firstName: "Robert Hansen",
        birthday: "1939-02-15",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "briangriffon@qouhog.com",
        username: "useMyName"
      },
      {
        firstName: "Ricardo Ramirez",
        birthday: "1960-02-29",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "givemestimulus@dontwanttowork.com",
        username: "useMyName"
      },
      {
        firstName: "Ted Bundy",
        birthday: "1926-11-24",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "randymarsh@southpark.com",
        username: "useMyName"
      },
      {
        firstName: "Christen Gilbert",
        birthday: "1967-11-13",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "rickgrimes@caroool.com",
        username: "useMyName"
      },
      {
        firstName: "Lavinia Fisher",
        birthday: "1793-11-02",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "rottweiler@bestdogbreed.com",
        username: "useMyName"
      },
      {
        firstName: "Waneta Hoyt",
        birthday: "1946-05-13",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "wilky@westpalmbeach.com",
        username: "useMyName"
      },
      {
        firstName: "Myra Hindley",
        birthday: "1942-07-03",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "reed@notadj.com",
        username: "useMyName"
      },
      {
        firstName: "Rosemary West",
        birthday: "1953-11-29",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "andrew@undercoverta.com",
        username: "useMyName"
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hikers', {}, null)
  }
};
