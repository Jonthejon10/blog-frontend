import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Posts from './components/Posts'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fullpost from './components/Fullpost';
import Footer from './components/Footer'

const App = () => {

  const [posts, setPosts] = useState([])

  // Fetching posts from DB
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
			'https://obscure-refuge-23971.herokuapp.com/api/posts'
		)
        const resJson = await res.json()
        setPosts(resJson.posts)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  
  return (
		<div className='container'>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route
						exact
						path='/blog-frontend/'
						element={<Posts posts={posts} />}
					/>
					<Route
						exact
						path='/blog-frontend/:id'
						element={<Fullpost />}
					/>
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
  )
}

export default App;
