import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { NhostClient } from '@nhost/nhost-js'
import { NhostAuthProvider } from '@nhost/react-auth'

const nhost = new NhostClient({
  backendUrl: 'http://localhost:1337'
})

nhost.auth
  .signIn({
    email: 'pilou@pilou.com',
    password: 'piloupilou'
  })
  .then(res => {
    console.log(res)
  })

ReactDOM.render(
  <React.StrictMode>
    <NhostAuthProvider nhost={nhost}>
      <App />
    </NhostAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
