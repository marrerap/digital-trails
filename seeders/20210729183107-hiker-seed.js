'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hikers', [
      {
        firstName: "Roger Rabbit",
        birthday: "1981-02-01",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "mclovin@superbad.com",
        password: "$2b$10$G6qwrJnoln552PV.KAWoQ.FFZ1Y3K5YWREoi2U7bHSzMYfJ5VIpea"

        

      },
      {
        firstName: "Hannibal Lecter",
        birthday: "1933-01-20",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "cartman@southpark.com",
        password: "$2b$10$G6qwrJnoln552PV.KAWoQ.FFZ1Y3K5YWREoi2U7bHSzMYfJ5VIpea"
        
      },
      {
        firstName: "Robert Hansen",
        birthday: "1939-02-15",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "briangriffon@qouhog.com",
        password: "$2b$10$G6qwrJnoln552PV.KAWoQ.FFZ1Y3K5YWREoi2U7bHSzMYfJ5VIpea"
        
      },
      {
        firstName: "Ricardo Ramirez",
        birthday: "1960-02-29",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "givemestimulus@dontwanttowork.com",
        password: "$2b$10$G6qwrJnoln552PV.KAWoQ.FFZ1Y3K5YWREoi2U7bHSzMYfJ5VIpea"
        
      },
      {
        firstName: "Ted Bundy",
        birthday: "1926-11-24",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "randymarsh@southpark.com",
        password: "$2b$10$G6qwrJnoln552PV.KAWoQ.FFZ1Y3K5YWREoi2U7bHSzMYfJ5VIpea"
        
      },
      {
        firstName: "Christen Gilbert",
        birthday: "1967-11-13",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "rickgrimes@caroool.com",
        password: "$2b$10$G6qwrJnoln552PV.KAWoQ.FFZ1Y3K5YWREoi2U7bHSzMYfJ5VIpea"
        
      },
      {
        firstName: "Lavinia Fisher",
        birthday: "1793-11-02",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "rottweiler@bestdogbreed.com",
        password: "$2b$10$G6qwrJnoln552PV.KAWoQ.FFZ1Y3K5YWREoi2U7bHSzMYfJ5VIpea"
        
      },
      {
        firstName: "Waneta Hoyt",
        birthday: "1946-05-13",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "wilky@westpalmbeach.com",
        password: "$2b$10$G6qwrJnoln552PV.KAWoQ.FFZ1Y3K5YWREoi2U7bHSzMYfJ5VIpea"
        
      },
      {
        firstName: "Myra Hindley",
        birthday: "1942-07-03",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "reed@notamusician.com",
        password: "$2b$10$G6qwrJnoln552PV.KAWoQ.FFZ1Y3K5YWREoi2U7bHSzMYfJ5VIpea"
        
      },
      {
        firstName: "Rosemary West",
        birthday: "1953-11-29",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempora ipsam veritatis quae dicta architecto blanditiis. Fugit ipsam ducimus expedita voluptas necessitatibus adipisci molestiae id. Aliquam suscipit magnam deserunt ",
        email: "andrew@undercoverta.com",
        password: "$2b$10$G6qwrJnoln552PV.KAWoQ.FFZ1Y3K5YWREoi2U7bHSzMYfJ5VIpea"
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hikers', {}, null)
  }
};
