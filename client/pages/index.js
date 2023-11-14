import Meta from "../components/Meta"
import styles from "../styles/Home.module.css"
import { Button, Form, Row, Col} from "react-bootstrap"

export default function Home() {
  return (
    <>
      <Meta title="Index Page"/>
      <div>
        <h3 className={styles.title}>Hello, World from NextJs!!!!</h3>

        {/* form */}
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className={styles.card}>
              <Form onSubmit="{registerUser}">
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Description" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Create Todo
                </Button>

              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
