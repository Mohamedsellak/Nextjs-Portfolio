import React from 'react'

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black fixed inset-0 z-40" id="loader">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-purple-700 animate-spin">
        </div>
    </div>
</div>
  )
}
