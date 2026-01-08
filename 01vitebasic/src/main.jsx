import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: '_blank'
//     },
//     children: "Click to visit google"
// }

function MyApp(){
    return (
        <div>
            <h1>Custom App | </h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target ='_blacnk'>Visit Google</a>
)

const anotherUser = "ChaiRRRRR"

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank',
    },
    'Click me to visit Google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    reactElement
)
