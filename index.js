import { useLayoutEffect } from 'react'

export default () => {

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'visible'
  }, [])

}
