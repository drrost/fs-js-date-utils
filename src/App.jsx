import React from 'react'
import {DateUtils} from "./lib";

const App = () => {
    return (
        <>
            <div>
                {'Date: ' + DateUtils.getCurrentDate()}
            </div>
        </>
    )
}

export default App
