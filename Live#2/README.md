# Live #2 - Entendendo o contexto this, Closures, IIFE e o Objeto Proxy em JS

### Aprendizados

1. Tag `output` para exibição de resultados

```html
<output>...</output>
```

2. Uso da classe `Proxy` JavaScript para escutar leituras e escritas em objetos

```js
const target = {
  key: 'value'
}

const handler = {
  set: (obj, property, value) => {
    console.log(`Setting property ${property} with ${value}`)

    obj[property] = value
    return true
  },
  get: (target, name) => {
    console.log(`Getting property ${name}`)

    return target[name]
  }
}

const object = new Proxy(target, handler)

object.key = 'New valor' // Setting property key with New valor
object.key // Getting property key
```

3. Uso do IIFE para isolar contexto e expor apenas o necessário para o browser

```js
(() => {
  const A = 'A'
  const B = 'B'

  window.A = A
})()
```
