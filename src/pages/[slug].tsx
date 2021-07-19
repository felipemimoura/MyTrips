import client from 'graphQL/client'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphQL/generated/graphql'
import { GET_PAGES, GET_PAGES_BY_SLUG } from 'graphQL/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PagesTemplate, { PagesTemplateProps } from 'template/Pages'

export default function Page({ heading, body }: PagesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <PagesTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGES_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
