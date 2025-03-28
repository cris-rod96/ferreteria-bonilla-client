import { Outlet } from 'react-router-dom'
import { Nav, Sidebar } from '../components/index.components'
import { useState } from 'react'
import { RiMenuFill } from 'react-icons/ri'
const HomeLayout = () => {
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow((prev) => !prev)
  return (
    <>
      <Sidebar show={show} toggleShow={toggleShow} />
      <main className="flex flex-col h-full bg-[#F4F2EE]">
        <Nav toggleShow={toggleShow} />
        <Outlet />
      </main>
    </>
  )
}

export default HomeLayout
