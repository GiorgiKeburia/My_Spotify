import { ChevronDownIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { shuffle } from 'lodash'

const randomColors = [
  'from-indigo-500',
  'from-red-500',
  'from-green-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
  'from-blue-500',
]

const Center = () => {
  const { data: session } = useSession()
  const [color, setColor] = useState(null)

  useEffect(() => {
    setColor(shuffle(randomColors).pop())
  }, [])

  return (
    <div className="flex-grow ">
      <header className="absolute top-5 right-8">
        <div className=" flex cursor-pointer items-center space-x-3 rounded-full bg-black p-1 pr-2 text-white opacity-90 hover:opacity-80">
          <img
            className="w-190  h-10   rounded-full "
            src={session?.user.image}
            alt=""
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`padding-8 flex h-80 items-end space-x-7 bg-gradient-to-b ${color} to-black text-white`}
      >
        hello
      </section>
    </div>
  )
}

export default Center
