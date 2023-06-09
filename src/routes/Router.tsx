import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FirstQuation from '../pages/AuthPage/mentorStatus/FirstQuation'
import MentorStatusLogin from '../pages/AuthPage/mentorStatus/MentorStatusLogin'
import MentorStatusRegister from '../pages/AuthPage/mentorStatus/MentorStatusRegister'
import SecondQuation from '../pages/AuthPage/mentorStatus/SecondQuation'
import ForgotPassword from '../pages/AuthPage/password/ForgotPassword'
import NewPassword from '../pages/AuthPage/password/NewPassword'
import ChooseStatusLogin from '../pages/AuthPage/status/ChooseStatusLogin'
import ChooseStatusRegister from '../pages/AuthPage/status/ChooseStatusRegister'
import UserLogin from '../pages/AuthPage/userStatus/UserLogin'
import UserRegister from '../pages/AuthPage/userStatus/UserRegister'
import CartPage from '../pages/CartPage/CartPage'
import HomePage from '../pages/HomePage/HomePage'
import LessonsPage from '../pages/LessonsPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import ProfilePage from '../pages/ProfilePage'
import Course from '../pages/HomePage/Course'
import Python from '../pages/HomePage/Courses/Python'
import JavaScript from '../pages/HomePage/Courses/JavaScript'
import WebDev from '../pages/HomePage/Courses/WebDev'
import Excel from '../pages/HomePage/Courses/Excel'

const PUBLIC_ROUTES = [
  {
    id: 1,
    element: <ForgotPassword />,
    link: 'forgot-password',
  },
  {
    id: 2,
    element: <NotFoundPage />,
    link: 'notFound'
  },
  {
    id: 3,
    element: <NewPassword />,
    link: 'new-password',
  },
  {
    id: 4,
    element: <FirstQuation />,
    link: 'question-1',
  },
  {
    id: 5,
    element: <SecondQuation />,
    link: 'question-2'
  },
  {
    id: 6,
    element: <ChooseStatusLogin />,
    link: 'choose-status-login'
  },
  {
    id: 7,
    element: <ChooseStatusRegister />,
    link: 'choose-status-register'
  },
  {
    id: 8,
    element: <UserLogin />,
    link: 'user-login'
  },
  {
    id: 9,
    element: <UserRegister />,
    link: 'user-register'
  },
  {
    id: 10,
    element: <MentorStatusLogin />,
    link: 'mentor-login'
  }, 
  {
    id: 11,
    element: <MentorStatusRegister />,
    link: 'mentor-register'
  },
  {
    id: 12,
    element: <LessonsPage />,
    link:'lessons'
  },
  {
    id: 13,
    element: <ProfilePage />,
    link: 'profile'
  },
  {
    id: 14,
    element: <CartPage />,
    link: 'cart'
  },
  {
    id: 15,
    element: <HomePage />,
    link: '/'
  }
]

const Router = () => {
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
         <Route path='course/*' element={<Course />}>
              <Route path=":coursename/python" element={<Python/>} />
              <Route path=":coursename/javascript" element={<JavaScript/>} />
              <Route path=":coursename/wev-dev" element={<WebDev/>} />
              <Route path=":coursename/excel" element={<Excel/>} />
         </Route>
      </Routes>
    </>
  )
}

export default Router

