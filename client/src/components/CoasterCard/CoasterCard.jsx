import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './CoasterCard.css'

const CoasterCard = ({ imageUrl, title, _id }) => {
    return (
        <Link to={`/detalles/${_id}`}>
            <Card className='mb-3 CoasterCard'>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Text>{title}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default CoasterCard;