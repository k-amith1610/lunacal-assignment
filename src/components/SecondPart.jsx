import React from 'react'
import FirstWidget from './FirstWidget'
import SecondWidget from './SecondWidget'
import HrTag from './HrTag'

const SecondPart = () => {
    return (
        <div
            className="flex-col w-[680px] h-[520px] lg:ml-[50px] mt-[50px] lg:mt-0 mb-[90px] lg:mb-[37px]"
        >
            <FirstWidget />
            <HrTag />
            <SecondWidget />
            <HrTag />
        </div>
    )
}

export default SecondPart
