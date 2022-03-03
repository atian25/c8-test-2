interface User {
  name: string;
}

function sayHi(user?: User) {
  if (!user) throw new Error('user is required');
  if (process.env.FROM === 'a') {
    console.log(`Hello ${user.name}, ${process.env.FROM}`);
  } else {
    console.log(`Hi ${user.name}, ${process.env.FROM}`);
  }
}

function test() {
  console.log('xxx');
}

sayHi({ name: 'tz' });
sayHi({ name: 'egg' });
