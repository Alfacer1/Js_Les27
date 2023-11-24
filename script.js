const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8', 'color-9', 'color-10'];

const users = [
  { name: 'Slava', color: 'color-4' },
  { name: 'Lena', color: 'color-7' },
];

function addUser(name) {

  const userExists = users.some(user => user.name === name);

  if (userExists) {
    console.log('Користувач з таким ім'ям вже існує');
    return;
  }

  if (users.length === colors.length) {
    console.log('Немає вільних кольорів для нового користувача');
    return;
  }

  const availableColor = colors.find(color => !users.some(user => user.color === color));

  users.push({ name, color: availableColor });

  console.log(`Користувач ${name} доданий з кольором ${availableColor}`);
}

addUser('Denys');
addUser('Vlad');
addUser('Maria');
addUser('Sanya');
addUser('Anatoliy');
console.log(users);
