import axios from "axios"
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import GamesContext from "./ulist/GameContext"
import Profile from "./pages/Profile"
import CarouselItem from "./components/Carousel"
//import UsersGames from "./pages/UsersGames"

function App() {
  const [games, setGames] = useState([])
  const [profile, setProfile] = useState([])
  const navigate = useNavigate()
  const [editId, setEditId] = useState(null)
  const [signupshow, setShowSignup] = useState(false)
  const [loginshow, setShowLogin] = useState(false)

  const handleOpenLogin = () => {
    setShowLogin(true)
  }

  const handleCloseLogin = () => {
    setShowLogin(false)
  }

  const handleOpenSignup = () => {
    console.log("ertyui")
    setShowSignup(true)
  }

  const handleCloseSignup = () => {
    setShowSignup(false)
  }

  const getGame1 = async () => {
    try {
      const response = await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key": "8b223af0a2msh4beca3a5c6c4de5p17979djsne4bb57d7b44d",
        },
      })
      setGames(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const getGame2 = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/testProject/items")
      setGames(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getGame1()
    getProfile()
  }, [])

  const addGames = async e => {
    e.preventDefault()

    try {
      const form = e.target

      const gamesBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.element.image.value,
        url: form.elements.url.value,
      }

      await axios.post(`https://vast-chamber-06347.herokuapp.com/api/v2/games-719/items`, gamesBody)

      getGame2()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

const editGames = e => {
  const id = e.target.id
  setEditId(id)
}

const confirmGames =  async e => {
  e.preventDefault()

  try {
  const form = e.target

  const gamesBody = {
    title: form.elements.title.value,
    description: form.elements.description.value,
    image: form.element.image.value,
    url: form.elements.url.value,
  }
  await axios.put(`https://vast-chamber-06347.herokuapp.com/api/v2/games-719/items/${editId}`, gamesBody)

      getGame2()
      setEditId(null)
      getProfile()
    } catch (error) {
      console.log(error)
    }
  }

const deleteGames = async e => {
  e.preventDefault()
  const id = e.target.id 
  try {
    await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/games-719/items/${id}`)
  getGame2()
} catch (error) {
  console.log(error.response.data)
}


  const signUp = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        photo: form.elements.photo.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody)
      console.log("sign up success")
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBody)
      const tokenGame = response.data
      localStorage.tokenGame = tokenGame
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }


  const logout = () => {
    localStorage.removeItem("tokenGame")
  }

  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.tokenGame,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const store = {
    games: games,
    profile: profile,
    addGames: addGames,
    signUp: signUp,
    login: login,
    logout: logout,
    handleOpenSignup: handleOpenSignup,
    handleCloseSignup: handleCloseSignup,
    handleOpenLogin: handleOpenLogin,
    handleCloseLogin: handleCloseLogin,
    signupshow: signupshow,
    loginshow: loginshow,
    editGames:editGames,
    confirmGames:confirmGames,
    deleteGames:deleteGames,
  }
  return (
    <GamesContext.Provider value={store}>
      <Navbar />
      <CarouselItem />
      <SignUp />
      <Login />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addGames" element={<addGames />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </GamesContext.Provider>
  )
}

export default App 
