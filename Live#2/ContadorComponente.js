(() => {
  const BTN_REINICIAR = 'btnReiniciar'
  const ID_CONTADOR = 'contador'
  const VALOR_CONTADOR = 100
  const PERIODO_INTERVALO = 10

  class ContadorComponente {
    constructor() {
      this.inicializar()
    }
  
    prepararContadorProxy() {
      const handler = {
        set: (currentContext, propertyKey, newValue) => {
          if (!currentContext.valor) {
            currentContext.efetuarParada()
          }
  
          currentContext[propertyKey] = newValue
          return true
        }
      }
  
      const contador = new Proxy({
        valor: VALOR_CONTADOR,
        efetuarParada: () => {
  
        }
      }, handler)
  
      return contador
    }
  
    atualizarTexto = ({ elementoContador, contador }) => () => {
      const identificadorTexto = '$$contador'
      const textoPadrao = `Começando em <strong>${identificadorTexto}</strong> segundos...`
  
      elementoContador.innerHTML = textoPadrao.replace(identificadorTexto, contador.valor--)
    }
  
    agendarParadaContador({ elementoContador, idInterval }) {
      return () => {
        clearInterval(idInterval)
  
        elementoContador.innerHTML = ''
        this.desabilitarBotao(false)
      }
    }
  
    prepararBotao(elementoBotao, iniciarFn) {
      elementoBotao.addEventListener('click', iniciarFn.bind(this))
    
      return (valor = true) => {
        const atributo = 'disabled'
  
        if (valor) {
          elementoBotao.setAttribute(atributo, valor)
          return
        }
  
        elementoBotao.removeAttribute(atributo)
      }   
    }
  
    inicializar() {
      const elementoContador = document.getElementById(ID_CONTADOR)
      const contador = this.prepararContadorProxy()
  
      const args = {
        elementoContador,
        contador
      }
  
      const fn = this.atualizarTexto(args)
  
      const idInterval = setInterval(fn, PERIODO_INTERVALO)
  
      {
        const elementoBotao = document.getElementById(BTN_REINICIAR)
        const desabilitarBotao = this.prepararBotao(elementoBotao, this.inicializar)
        desabilitarBotao()
  
        const args = {  elementoContador, idInterval }
        const pararContadorFn = this.agendarParadaContador.apply({ desabilitarBotao }, [args])
  
        contador.efetuarParada = pararContadorFn
      }
    }
  }

  window.ContadorComponente = ContadorComponente
})()
