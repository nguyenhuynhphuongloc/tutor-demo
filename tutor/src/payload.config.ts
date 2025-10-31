// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import { Topics } from '@/collections/Topics'
import { register } from '@/app/(payload)/api/Register'
import { login } from '@/app/(frontend)/LoginPage/actions/login'
import ListeningTests from '@/collections/ListeningTest'
import WritingTests from '@/collections/WritingTest'
import ReadingTests from '@/collections/ReadingTest'
import SpeakingTests from '@/collections/SpeakingTest'

const filename = fileURLToPath(import.meta.url)

const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },

  editor: defaultLexical,

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  collections: [Pages,Posts,Media,Categories,Users,Topics,WritingTests,ListeningTests,ReadingTests,SpeakingTests],

  cors: [getServerSideURL()].filter(Boolean),

  globals: [Header, Footer],

  plugins: [...plugins],

  secret: process.env.PAYLOAD_SECRET,

  sharp,

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
    
  },

  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },

   endpoints: [
    {
      path: '/custom/register', 
      method: 'post',
      handler: register,
    },
     {
      path: '/login', 
      method: 'post',
      handler: login,
    },
  ],

})