import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import coastersServices from './../../services/coasters.services'

const NewCoasterForm = ({ fireFinalActions }) => {

    const [coasterData, setCoasterData] = useState({
        title: '',
        description: '',
        length: 0,
        inversions: 0,
        imageUrl: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setCoasterData({ ...coasterData, [name]: value })
    }

    const handleCoasterSubmit = e => {
        e.preventDefault()

        coastersServices
            .saveCoaster(coasterData)
            .then(({ data }) => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleCoasterSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="title" value={coasterData.title} onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="inversions">
                    <Form.Label>Inversiones</Form.Label>
                    <Form.Control type="text" name="inversions" value={coasterData.inversions} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="length">
                    <Form.Label>Longitud</Form.Label>
                    <Form.Control type="text" name="length" value={coasterData.length} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="imageUrl">
                    <Form.Label>URL imagen</Form.Label>
                    <Form.Control type="url" name="imageUrl" value={coasterData.imageUrl} onChange={handleInputChange} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" name="description" value={coasterData.description} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit">Crear montaña rusa</Button>
        </Form>
    );
}

export default NewCoasterForm