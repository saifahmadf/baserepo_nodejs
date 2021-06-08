'use strict'

const cls = require('cls-hooked')

const nsid = 'a6a29a6g-6747-4b5f-b99f-18ee96e32f11'

const get = (key) => {
  const ns = cls.getNamespace(nsid)
  if(ns && ns.active){
    return ns.get(key)
  }
}

const set = (key, value) => {
  const ns = cls.getNamespace(nsid)
  if(ns && ns.active){
    return ns.set(key, value)
  }
}

const getNs = () => {
  return cls.getNamespace(nsid) || cls.createNamespace(nsid)
}

module.exports = {
  get: get,
  set: set,
  getNs
}