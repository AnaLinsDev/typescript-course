
enum Type {
  ADMIN,
  GUEST
};

const personB = {
    name: "Ana",
    age: 22,
    hobbies: ['Sports', 'Cooking'],
    type: Type.ADMIN
  };
  
console.log(personB.name);

for (let hobby of personB.hobbies) {
    console.log(hobby)
}

if (personB.type === Type.ADMIN ) {
  console.log('is admin')
}


/*
Another option: 

const personB: {
  name: string;
  age: number;
} = {
  name: "Ana",
  age: 22,
};

console.log(personB.name);
*/