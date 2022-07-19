import Datastore from 'nedb'

const users = new Datastore({
  filename: './datastore/users.json',
  autoload: true
})

users>loadDatabase((err) => console.log(err))

export function createUser(name, surname, username, password) {
  const doc = {
    name,
    surname,
    password
  }
}

users.insert(doc, (err, newDoc) => {
  console.log(err);
})