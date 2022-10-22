import type { NextPage } from 'next'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Menu from './components/Menu'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
