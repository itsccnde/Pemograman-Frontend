const users = [{
  name : "Syita Dwi Safitri",
  age : 21,
  major : "Informatika",
},{
  name : "Salsa mutia",
  age : 20,
  major : "Sistem Informasi",
},{
  name : "Laila Amanda",
  age : 20,
  major : "Sistem Informasi",
},{
  name : "Yahya Ayyasy",
  age : 21,
  major : "Informatika",
},{
  name : "Bayu Setiawan",
  age : 21,
  major : "Informatika"
}]

const all = ()=>{
  for (let i = 0; i <= users.length;i++){
    console.log(users[i])
  }
}

const store = (user)=>{
  users.push(user);
}

const update = (index, user)=>{
  users[index]=user
}

const destroy = (index)=>{
  const x = 1
  users.splice(x,index)
}

const main = () => {
  
  console.log("# Get All Users");
  all();

  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  console.log("# Edit User: Isfa");
  update(0,{
    name : "Isfa",
    age : 23,
    major : "Informatika"
  });

  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();
all()

module.exports = { users, all, store, update, destroy };
