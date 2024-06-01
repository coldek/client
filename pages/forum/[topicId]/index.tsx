import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { getData } from '../../../helpers/getData'
import { imageServer, server } from '../../../helpers/config'
import Link from 'next/link'

type ServerResponse = {
  topic: {
    id: number,
    created: Date,
    title: string,
    description: string
  },
  threads: [any[], number]
}

const BackLink = ({href, text}: {href: string, text: string}) => (
  <Link className="border-b-[1.5px] hover:border-b-0 border-black" href={href}>{text}</Link>
)

const ForumTopicPage: NextPage<ServerResponse> = ({topic, threads: [threadsRaw, count]}) => {
  return (
    <div className="flex flex-col mt-20 mx-auto max-w-[1000px]">
      <div className="font-bold text-lg mb-2">
        <BackLink href="/forum" text="Forum" /> {`>`} <BackLink href={`/forum/${topic.id}`} text={topic.title} />
      </div>
      <div className="md:grid md:grid-cols-5 bg-cyan-800 rounded-t-lg p-4 text-white text-lg">
        <div className="col-span-2">
          Thread Info
        </div>
        <div className="hidden md:block text-center">
          Replies
        </div>
        <div className="hidden md:block text-center">
          Views
        </div>
        <div className="hidden md:block text-right">
          Latest post
        </div>
      </div>
      {threadsRaw.map(thread => (
        <div className="grid grid-cols-2 md:grid-cols-5 p-2 bg-gray-200 border-b-2 border-gray-300" key={thread.id}>
          <div className="flex col-span-2 gap-2">
            <div>
              <img src={`${server}/images/avatars/headshots/${thread.author.avatar.cache}.png`} style={{"width": 60, "minWidth": 60, borderRadius: '50%'}} />
            </div>
            <div className="pt-2 text-lg font-bold leading-4">
              <Link href={`/forum/${topic.id}/threads/${thread.id}`}>
                {thread.title}
              </Link>
              <br />
              <span className="text-sm font-normal">by {thread.author.username}</span>
            </div>
          </div>
          <div className="md:text-center text-right mr-2 my-auto"><b className="md:hidden">Replies:</b> 0</div>
          <div className="md:text-center text-left my-auto"><b className="md:hidden">Views:</b> 0</div>
          <div>ur mom</div>
        </div>
      ))}
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  let data: ServerResponse = {} as ServerResponse

  if(params === undefined || typeof params.topicId !== "string" || isNaN(parseInt(params.topicId))) {
    return {
      redirect: {
        destination: '/forum',
        permanent: false
      }
    }
  }

  let {topic, threads} = await getData({
    url: `${server}/forum/topics/${params.topicId}`,
    method: 'get'
  })
  
  data.topic = topic
  data.threads = threads

  return {
    props: {
      ...data
    }
  }
}
export default ForumTopicPage