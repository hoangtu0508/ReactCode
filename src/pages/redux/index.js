import React, { useState } from 'react'
import Header from '../../component/Layout/Header'
import HeaderInfo from './HeaderInfo'
import EditPage from './EditPage'

const Redux = () => {
    const [isEdit, setIsEdit] = useState(false)
    return (
        <div>
            <Header />
            {isEdit ? (<EditPage />) : (<HeaderInfo setIsEdit={setIsEdit}/>)}
        </div>
    )
}

export default Redux