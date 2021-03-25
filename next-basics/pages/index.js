import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Demo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="frontend development, started learning react"></meta>
      </Head>

      <h1>Learn Next.js</h1>
     
    </div>
  )
}

//Data Fetching!

export const getStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
