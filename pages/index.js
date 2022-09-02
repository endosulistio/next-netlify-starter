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
    <Link href="https://tukar.co.id">
          <a>Convert Pulsa</a>
        </Link>
        <p className="description">
    
    
Ada beberapa aplikasi convert pulsa jadi uang yang bisa memudahkan Anda menukarkan saldo pulsa menjadi uang digital.
 Uangku merupakan mobile wallet yang bisa Anda gunakan untuk melakukan pembayaran berbagai transaksi online. Aplikasi ini merupakan aplikasi dompet digital yang dikelola oleh PT Smartfren Telecom Tbk. Uangku juga bisa digunakan untuk mengkonversi pulsa jadi uang yang bisa ditransfer ke berbagai rekening bank dan dompet digital lainnya. Aplikasi konversi pulsa jadi uang yang juga banyak digunakan adalah ConvertPulsay. Aplikasi ini menggunakan metode transfer pulsa untuk sesama operator yang ditransfer baik ke dompet digital maupun ke ATM. ConvertPulsay juga memiliki nilai rate yang tinggi sehingga bisa Anda jadikan pilihan untuk mengkonversi pulsa Anda menjadi uang. Converin juga menjadi salah satu aplikasi konversi pulsa jadi uang yang banyak digunakan. Converin dibuat oleh developer JoonDev untuk memudahkan masyarakat dalam menggunakan pulsa dan menukarkannya menjadi uang tunai yang bisa digunakan untuk berbagai keperluan. Melalui aplikasi ini, Anda bisa menukarkan saldo pulsa Anda menjadi uang tunai yang bisa ditransfer ke rekening dan e-wallet seperti DANA, OVO, Gopay, dan ShopeePay. 
Itulah beberapa aplikasi  jadi uang yang bisa membantu mengubah saldo pulsa menjadi uang tunai. Dengan adanya beberapa aplikasi ini, Anda tidak perlu perlu bingung untuk memanfaatkan pulsa Anda yang melimpah ruah.
      </main>

      <Footer />
    </div>
  )
}
