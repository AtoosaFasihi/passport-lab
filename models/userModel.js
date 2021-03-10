const database = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    role: "admin",
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
    role: "user",
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
    role: "user",
  },
];

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },

  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
  findByGithubId: (profile) => {
    const user = database.find((user) => user.githubId === profile.id);
    return user;
    // if (user) {
    //   return user;
    // }
    // throw new Error(`Couldn't find user with id: ${profile}`);
  },
  addGithubUser: (profile) => {
    console.log(profile)
    const user = { id: profile.id,
                  name: profile.username,
                  githubId: profile.id,
                  role: "user"
    }
    database.push(user)
  }
};

module.exports = { database, userModel };
