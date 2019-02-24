const root_url = "https://randomuser.me/api";
const url = "assets/dummy.json";

let numberOfUsersToCreate;

document.addEventListener("DOMContentLoaded", initialise);

function initialise() {
  document.getElementById("getUsers").addEventListener("click", fetchUsers);
}

function fetchUsers() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      var listArr = [];
      for (let i = 0; i < json.results.length; i++) {
        var filteredUser = generateFilteredUser(json.results[i]);
        listArr.push(filteredUser);
      }

      var userList = { users: listArr };
      console.log(JSON.stringify(userList));
    });
}

function generateUserList(json) {}

function generateFilteredUser(data) {
  var user = {
    gender: data.gender,
    name: {
      first: data.name.first,
      last: data.name.last
    },
    location: {
      street: data.location.street,
      city: data.location.city,
      postcode: data.location.postcode
    },
    email: data.email,
    age: data.dob.age,
    phone: data.phone,
    mobile: data.cell,
    pictures: {
      large: data.picture.large,
      medium: data.picture.medium,
      thumbnail: data.picture.thumbnail
    }
  };

  return user;
}
