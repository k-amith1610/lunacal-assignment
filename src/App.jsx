import React from 'react'
import SecondPart from './components/SecondPart'

const App = () => {
  return (
    <div
      className="min-h-screen lg:p-10 bg-[#000000de] flex lg:flex-row flex-col 
      shadow-[inset_0px_0px_10px_10px_rgba(0,0,0,0.75)] shadow-black lg:justify-center items-center"
    >
      <div
        className="w-[680px] lg:w-[736px] h-[200px] lg:h-[550px] rounded-[27px] border-[1px] border-[#96BEE7]
                  bg-[#616161D1] mt-10 lg:mt-0"
      >
      </div>
      <SecondPart />
    </div>
  )
}

export default App
