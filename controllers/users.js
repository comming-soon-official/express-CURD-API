import { v4 as uuidv4 } from "uuid";
let users = [];

export const createUser = (req, res) => {
  console.log("POST ROUTE REACHED");
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstname} added to the database`);
};

export const getUser = (req, res) => {
  console.log(users);
  res.send(users);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with id ${id} from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstname) user.firstname = firstname;
  if (lastname) user.lastname = lastname;
  if (age) user.age = age;

  res.send(`User with id ${id} is Updated`);
};

export const idUser = (req, res) => {
  const { id } = req.params;
  const founduser = users.find((user) => user.id === id);
  res.send(founduser);
};
