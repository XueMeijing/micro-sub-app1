import { Routes, Route, Navigate } from 'react-router-dom'

import Expenses from '../pages/Expenses'
import Test from '../pages/Test'

const Routers = () => {
  return (
    <Routes>
      <Route path='/main/page1' element={<Expenses />} />
      <Route path='/main/page2' element={<Test />} />
      <Route path='/*' element={<Navigate to='/main/expenses' />} />
    </Routes>
  )
}

export default Routers