import * as atom from '@/stores'

import useMediaQuery from './useMediaQuery'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

interface DrawerReturn {
  isOpen: boolean
  changeState: () => void
}

const useDrawer = (): DrawerReturn => {
  const [isOpen, setIsOpen] = useAtom(atom.atomDrawer)
  const mdscreen = useMediaQuery('(min-width: 768px)')

  const changeState = () => setIsOpen((prev) => !prev)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (mdscreen) setIsOpen(false)
      if (isOpen) {
        document.documentElement.classList.add('overflow-y-hidden')
      } else {
        document.documentElement.classList.remove('overflow-y-hidden')
      }
    }
  }, [isOpen, mdscreen])

  return {
    isOpen,
    changeState
  }
}

export default useDrawer
