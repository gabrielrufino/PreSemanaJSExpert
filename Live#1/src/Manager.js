const Employee = require('./Employee')
const Util = require('./Util')

class Manager extends Employee {
  #bonuses = 2000

  get bonuses() {
    return Util.formatCurrency(this.#bonuses)
  }

  get netPay() {
    const result = Util.unFormatCurrency(super.netPay) + this.#bonuses

    return Util.formatCurrency(result)
  }
}

module.exports = Manager
