const userModel = require("../models/userModel").userModel;

const getUserByEmailIdAndPassword = (email, password) => {
  let user = userModel.findOne(email);
  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }
  return null;
};
const getUserById = (id) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};

function isUserValid(user, password) {
  return user.password === password;
}

const getUserByGitHubIdOrCreate = (profile) => {
  // console.log(profile)
  // let user = userModel.findByGithubId(profile);
  // if (user) {
  //   if (isUserValid(user, password)) {
  //     return user;
  //   }
  // }
  // return null;
  let user = userModel.findByGithubId(profile);
  if (!user) {
    // add user
    userModel.addGithubUser(profile)
    // get user
    user = userModel.findByGithubId(profile)
  }
  return user;
}

module.exports = {
  getUserByEmailIdAndPassword,
  getUserById,
  getUserByGitHubIdOrCreate,
};
