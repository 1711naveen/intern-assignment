import Image from 'next/image'
import styles from './page.module.css'
import Card from '@/stories/Card/Card'
import Form from '@/stories/Form/Form'
import Table from '@/stories/Table/Table'
import Page from '@/stories/Page/Page'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <Form />
        <br /><br />
        <Card />
        <br /><br />
        <Table />
        <br /><br />
        <Page />
      </div>
    </main>
  )
}