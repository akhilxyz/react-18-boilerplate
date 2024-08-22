import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface State {
  isDark: boolean
  locale: 'en' | 'zh-cn'
  appName : string
}

interface Action {
  toggleDark: () => void
  toggleLocale: (value: State['locale']) => void
}

const settingStore = create(persist<State & Action>(set => ({
  isDark: false,
  toggleDark: () => {
    set(state => ({ isDark: !state.isDark }))
  },
  locale: 'en',
  toggleLocale: (value) => {
    set(() => ({ locale: value }))
  },
  appName : 'WALLET-APP'
}), {
  name: 'setting-storage',
  storage: createJSONStorage(() => localStorage),
}))

export { settingStore }
