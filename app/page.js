
import Card from '@/stories/Card/Card'
import Form from '@/stories/Form/Form'
import Table from '@/stories/Table/Table'
import Page from '@/stories/Page/Page'

export default function Home() {
  return (

    <div className="container d-flex justify-content-center" style={{backgroundColor:"white"}}>
      <Form />
      <br /><br />
      <Card />
      <br /><br />
      <Table />
      <br /><br />
      <Page />
    </div>

  )
}
