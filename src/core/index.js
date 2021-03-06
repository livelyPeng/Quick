
import { initMixin } from './init'
import { renderMixin } from './render'

function Quick (options) {
  // 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
  // 用来检测 Quick.prototype 是否存在于参数 this 的原型链上。
  if (!(this instanceof Quick)
  ) {
    console.error('Quick是一个构造函数，应该用 `new`关键字调用')
  }
  this._init(options)
}

initMixin(Quick)
renderMixin(Quick)

export default Quick
