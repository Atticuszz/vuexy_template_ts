// eslint-disable-next-line valid-appcardcode-code-prop
import {} from '@/store/api'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { watch } from 'vue'

// const data here

export const useTasksStore = defineStore({
    id: 'your_store_name',

  state: () => ({
      // your states here

  }),

  getters: {
      //
  },

  actions: {
      // your actions here
  },
})
