import { MapProps } from 'components/Map/interface'
import client from 'graphQL/client'
import { GetPlacesQuery } from 'graphQL/generated/graphql'
import { GET_PLACES } from 'graphQL/queries'
import HomeTemplate from 'template/Home'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 5,
    props: {
      places
    }
  }
}
