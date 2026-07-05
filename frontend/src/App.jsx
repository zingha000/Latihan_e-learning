import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Grades from './pages/Grades'
import Profile from './pages/Profile'
import CourseDetail from './pages/CourseDetail'
import Assignment from './pages/Assignment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mata-kuliah/:id" element={<CourseDetail />} />
          <Route path="/tugas/:id" element={<Assignment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App