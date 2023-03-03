import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NewCoasterForm from '../../components/NewCoasterForm/NewCoasterForm'

const NewCoasterPage = () => {

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/galeria')
    }

    return (
        <Container>

            <h1>Nueva montaña rusa</h1>
            <hr />
            <NewCoasterForm fireFinalActions={fireFinalActions} />

        </Container>
    )
}

export default NewCoasterPage