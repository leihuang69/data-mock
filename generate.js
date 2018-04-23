const faker = require("faker");
const fs = require("fs")

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function generate() {
  const rawData = {
    user_list: [...Array(100)].map((value, index) => ({
      id: index + 1,
      email: faker.internet.email(),
      register_from: getRandomInt(0,5),
      nickname: faker.internet.userName(),
      avatar_url: faker.image.avatar(),
      sex: getRandomInt(-1, 1),
      friend_count: getRandomInt(0,20),
      os: ["ios", "android", "unknown"][getRandomInt(0,2)],
      user_status: getRandomInt(0,3),
      avatar_status: getRandomInt(0,2),
      has_game: getRandomInt(0,1),
      phone: faker.phone.phoneNumber(),
      feedback_count: getRandomInt(0,10)
    }))
  };

  const data = JSON.stringify(rawData);

  fs.writeFileSync("db.json", data)
};

generate();
