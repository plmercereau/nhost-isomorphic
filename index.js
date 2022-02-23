import { HasuraAuthClient } from '@nhost/hasura-auth-js'
import { NhostClient } from '@nhost/nhost-js'

const auth = new HasuraAuthClient({
  url: 'http://127.0.0.1:1337/v1/auth'
})
const nhost = new NhostClient({
  backendUrl: 'http://127.0.0.1:1337'
})

const main = async () => {
  const result = await auth.signIn({
    email: 'pilou@pilou.com',
    password: 'piloupilou'
  })
  console.log(result)
  const res2 = await nhost.auth.signIn({
    email: 'pilou@pilou.com',
    password: 'piloupilou'
  })
  console.log(res2)
  process.exit()
}

main()
