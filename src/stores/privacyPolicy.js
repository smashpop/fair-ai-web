import { defineStore } from 'pinia'
import { fetchListAll } from '@/apis/privacyPolicy'

export const usePrivacyPolicys = defineStore('privacyPolicy', {
  state: () => ({
    list: []
  }),
  actions: {
    async loadPrivacyPolicys() {
      await fetchListAll()
        .then((response) => {
          this.list = response.data.items
        })
        .catch((error) => {
          console.log('>>Store-load PrivacyPolicys fail. error=', error)
        })
    }
  },
  persist: true
})
