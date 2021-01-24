# Live #1 - Os segredos da Sintaxe Javascript

### Aprendizados

1. Propriedades privadas usando `#` a partir do Node 14.3

```js
class Something {
  #prop

  constructor({ prop }) {
    this.#prop = prop
  }
}
```

2. Formatador de moeda nativo

```js
const value = 1576.89

Intl
  .NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency'
  })
  .format(value) // R$ 1.576,89
```

3. Blocos de código com escopos separados

```js
const name = 'Elon Musk'

{
  const name = 'Gabriel Rufino'
  console.log(name) // Gabriel Rufino
}

{
  const name = 'Alexa'
  console.log(name) // Alexa
}

console.log(name) // Elon Musk
```

4. Uso do `this` dentro de uma função estática de refere ao membro estático da classe

```js
class Something {
  static tax = 3.99

  static valueWithTax(value) {
    return value + this.tax
  }
}

Something.valueWithTax(45) // 48.99

class WrongSomething {
  tax = 3.99

  static valueWithTax(value) {
    return value + this.tax
  }
}

WrongSomething.valueWithTax(45) // NaN
```

4. Mockar o ano atual

```js
Date.prototype.getFullYear = () => 1999

new Date().getFullYear() // 1999
```

5. Acessar um getter da classe herdada usando `super` no getter de mesmo nome da classe herdeira

```js
class Base {
  get prop() {
    return 1
  }
}

class Something extends Base {
  get prop() {
    return super.prop + 1
  }
}

const something = new Something()
console.log(something.prop) // 2
```
