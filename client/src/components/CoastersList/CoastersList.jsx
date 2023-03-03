import CoasterCard from "../CoasterCard/CoasterCard"
import { Col, Row } from "react-bootstrap"

const CoastersList = ({ coasters }) => {

    return (
        <Row>
            {
                coasters.map(elm => {
                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <CoasterCard {...elm} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default CoastersList