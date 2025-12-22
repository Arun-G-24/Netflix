import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './Header'
import LoginPage from './LoginPage'
import SearchBar from './SearchBar'


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />
      
    },

    {
          path: '/search',
          element: <SearchBar />
    }
      
    
  ])

 
  return <RouterProvider router={appRouter} />
}

export default Body
