// import { Inter } from 'next/font/google'
import Layout from './components/Layout';
import Main from './components/Main';

// const inter = Inter({ subsets: ['latin'] })

export const API_BASE_URL = "http://localhost:3000/api/"

export default function Home() {
  return (
    <Layout>
      <Main />
    </Layout>
  )
};
