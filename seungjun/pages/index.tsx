import type { NextPage } from 'next'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
