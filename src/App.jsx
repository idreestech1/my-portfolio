import React, { useEffect } from 'react'
import Pages from './pages/Pages'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './index.css'



function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      'div:not(.hero), main[id]:not(.hero)'
    )

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -20px 0px', threshold: 0 }
    )

    elements.forEach((element) => {
      element.classList.add('reveal-on-scroll')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <Pages />
      <Footer />
    </>
  )
}

export default App