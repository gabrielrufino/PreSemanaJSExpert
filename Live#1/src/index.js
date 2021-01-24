const EntityBase = require('./EntityBase')
const Employee = require('./Employee')
const Manager = require('./Manager')

/*
console.log('Test #1\n')

const me = new EntityBase({
  name: 'Gabriel Rufino',
  age: 21,
  gender: 'male',
})

const she = new EntityBase({
  name: 'Alexa',
  age: 5,
  gender: 'female'
})

console.log(me.name)
console.log(she.name)

console.log(me.birthYear)
console.log(she.birthYear)
*/

/*
console.log('Test #2')

{
  const me = new Employee({ name: 'Gabriel Rufino', gender: 'male' })
  console.log(me.grossPay)
  console.log(me.netPay)
}
*/

console.log('Test #3')

const manager = new Manager({
  name: 'Mariazinha',
  age: 18,
  gender: 'female'
})

console.log(manager.netPay)


