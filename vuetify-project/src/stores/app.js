import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  // 保存的資料
  state: () => {
    return {
      number: 0,
    }
  },
  // 修改資料的 function
  actions: {
    plus() {
      this.number++
    },
    mines() {
      this.number--
    },
  },
  // 取資料的 function
  getters: {
    square() {
      return Math.pow(this.number, 2)
    },
  },
})
