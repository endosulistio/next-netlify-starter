import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Convert Pulsa" />
        <p className="description">
     Itulah beberapa aplikasi convert pulsa jadi uang yang bisa membantu mengubah saldo pulsa menjadi uang tunai. Dengan adanya beberapa aplikasi ini, Anda tidak perlu perlu bingung untuk memanfaatkan pulsa Anda yang melimpah ruah.
        </p>
      </main>

      <Footer />
    </div>
  )
}
