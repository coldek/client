import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { getData } from '../../helpers/getData'
import { server } from '../../helpers/config'
import Centered from '../../components/layouts/Centered'
import Link from 'next/link'

const ForumTopic = ({topic}: any) => {
  
  return (
  <div className="flex flex-col md:grid md:grid-cols-5 bg-gray-200 p-4 rounded-lg">
    <div className="col-span-2">
      <Link href={`/forum/${topic.id}`}>
        <span className="text-2xl font-bold">{topic.title}</span>
        <br />
        {topic.description}
      </Link>
    </div>
    <div className="text-center">
      <span className="font-bold md:hidden">Threads:</span> 0
    </div>
    <div className="text-center">
      <span className="font-bold md:hidden">Replies:</span> 0
    </div>
    <div className="ml-8">
      <span className="font-bold block md:hidden">Latest Post:</span>
      balls 
    </div>
  </div>
)}

const ForumIndexPage: NextPage<any> = ({data}) => {
  return (
    <div className="flex flex-col mt-20 gap-2">
      <div className="md:grid md:grid-cols-5 bg-cyan-800 rounded-lg p-4 text-white text-lg">
        <div className="col-span-2">
          Topic Info
        </div>
        <div className="hidden md:block text-center">
          Threads
        </div>
        <div className="hidden md:block text-center">
          Replies
        </div>
        <div className="hidden md:block text-right">
          Latest post
        </div>
      </div>
      {data?.topics[0].map((topic: any) => <div key={topic.id}><ForumTopic topic={topic}/></div>)}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  let data = {} as any

  try {
    data.topics = await getData({
      url: `${server}/forum/topics`,
      method: 'get'
    })
    console.log({topics: data.topics})
  } catch (e) {
    res.statusCode = 404
    data.statusCode = 404
  }

  return {
    props: {
      data
    }
  }
}

export default ForumIndexPage