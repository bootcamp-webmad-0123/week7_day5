import { useContext, useEffect, useState } from "react"
import { Container, Modal, Button } from "react-bootstrap"
import CoastersList from "../../components/CoastersList/CoastersList"
import Loader from "../../components/Loader/Loader"
import NewCoasterForm from "../../components/NewCoasterForm/NewCoasterForm"
import { AuthContext } from "../../contexts/auth.context"
import coastersService from "../../services/coasters.services"


const CoastersListPage = () => {

    const [showModal, setShowModal] = useState(false)
    const [coasters, setCoasters] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadCoasters()
    }, [])

    const loadCoasters = () => {
        coastersService
            .getCoasters()
            .then(({ data }) => {
                setCoasters(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        setShowModal(false)
        loadCoasters()
    }

    return (


        <>
            <Container>
                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <>
                            <h1>Listado de montañas rusas</h1>
                            {user && <Button onClick={() => setShowModal(true)} variant="dark" size='sm'>Crear nueva</Button>}
                            <hr />
                            <CoastersList coasters={coasters} />
                        </>
                }
            </Container>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton> <Modal.Title>Nueva montaña rusa</Modal.Title></Modal.Header>
                <Modal.Body>
                    <NewCoasterForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default CoastersListPage