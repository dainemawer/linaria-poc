import Hero from 'package-components/Hero'
import { articles } from 'package-data/articles'

const Home = () => {
    return (
        <section>
            <h1>Home - Project One</h1>
            <Hero articles={articles} />
        </section>
    )
}

export default Home;
