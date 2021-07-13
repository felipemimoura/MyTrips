import client from 'graphQL/client'
import { GET_PAGES } from 'graphQL/queries'
import { useRouter } from 'next/dist/client/router'
import PagesTemplate from 'template/Pages'

export default function AboutPage() {
  const router = useRouter()

  if (router.isFallback) return null

  return <PagesTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

// export const getStaticProps = async () => {
//   console.log(pages)

//   return {
//     props: {}
//   }
// }
