import type { NextPage } from 'next'
import React from 'react'
import Dropdown from '../components/Dropdown'

const Home: NextPage = () => {
  const Inner = () => <>test</>

  return (
    <>
      <Dropdown inner={<Inner />} styles="p-2">
        <div className="container">test</div>
      </Dropdown>
    </>
  )
}

export default Home
