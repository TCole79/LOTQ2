// import 'app/assets/stylesheets/application.scss'
import React from "react"
import Header from './Header'
import Footer from './Footer'
import Quotes from './Quotes'
// import Modal from './Modal'
// import Favorites from './Favorites'

// below is class based React
// class App extends Component {
//   render() {
//     return (
//       <p>Hello world, this is your app speaking 2</p>
//     )
//   }
// }
// export default App


// below is component based React
export default function App() {

  return (
    <main>
      <Header />
      <p>Hello world, this is your app speaking 2</p>
      <Quotes />
      {/*{favorites.length > 0 && <Favorites />}*/}
      {/*{showModal && <Modal /> }*/}
      <Footer />
    </main>
  )
}
