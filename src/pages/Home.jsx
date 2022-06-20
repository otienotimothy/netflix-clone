import {Hero, Row} from '../components'
import {URL_PATHS} from '../api/urls'

export const Home = () => {

  const { upcoming, popular, trending, topRated, horror } = URL_PATHS

  return (
    <div>
      <Hero />
      <Row title={'Trending'} url={trending} />
      <Row title={'Popular'} url={popular} />
      <Row title={'Upcoming'} url={upcoming} />
      <Row title={'Top Rated'} url={topRated} />
      <Row title={'Horror'} url={horror} />
    </div>
  )
}
