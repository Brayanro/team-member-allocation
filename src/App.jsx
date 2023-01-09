import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import { DataProvider } from './context/DataContext'
import Employees from './pages/Employees'
import GroupedTeamMembers from './pages/GroupedTeamMembers'
import NotFound from './pages/NotFound'


function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Employees />}
          >
          </Route>
          <Route
            path='/GroupedTeamMembers'
            element={<GroupedTeamMembers />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  )
}

export default App
