"use client"

import Link from 'next/link'
import React, { ChangeEvent } from 'react'
import { useState } from 'react'

export default function page() {
  const [roomId , setRoomId] = useState("")
  return (
    <div className='flex flex-col items-center justify-between gap-y-6 p-24'>

      <h1 className='text-3xl font-bold text-blue-700'>Nextjs Video Calling App with Zegocloud</h1>

      <input type="text" placeholder='Enter the room id' className='px-4 py-2 outline-none bg-gray-100 rounded-lg'
        value={roomId}
        onChange={(e:ChangeEvent<HTMLInputElement>) =>{setRoomId(e.target.value)}}
      />

      <Link href={`/room/${roomId}`}>
        <button className='px-4 py-2 bg-blue-700 text-white rounded-md font-medium'>Join Room</button>
      </Link>
    </div>
  )
}
