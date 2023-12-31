import Meta from "../components/Meta"
import styles from "../styles/Home.module.css"
import { Button, Form, Row, Col} from "react-bootstrap"
import axios from "axios"
import swal from "sweetalert"
import { useRouter } from "next/router"
import TodoList from "@/components/TodoList"


export default function Home({todos}) {

  const router = useRouter()

  const createTodo = (e) => {
    e.preventDefault()
    // console.log(e.target.title.value)
    axios.post("http://localhost:8000/todos",{
      title: e.target.title.value,
      description: e.target.description.value,
      completed: false,
      time: Date()
    }).then(function(response){
      swal({
        title: "Todo created!",
        text: "Todo task has been created",
        icon: "success"
      })
    }).catch(function(error){
      console.log(error)
    })
    //clear form
    e.target.reset()

    router.push("/")
  }

  return (
    <>
      <Meta title="Index Page"/>
      <div>
        <h3 className={styles.title}>Todo App</h3>

        {/* form */}
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className={styles.card}>
              <Form onSubmit={createTodo}>
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
        <TodoList todos={todos}/>
      </div>
    </>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:8000/todos")
  const todos = await res.json()

  return {
    props: {
      todos
    }
  }
}