import { useState } from 'react';
import { useContext } from 'react';
import { SignedInUserContext } from '../context/SignedInUser';
import deleteEvents from '../utils/deleteEvents';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteEventModal({event,setRemoveCard}) {
    const { signedInUser } = useContext(SignedInUserContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteCard = ()=> {
        deleteEvents(event.id, signedInUser.user.id)
        .then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            handleClose();
            setRemoveCard(true);
        });
    }

    return (
        <>
        <Button variant="danger" onClick={handleShow}>
            Delete
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>This action cannot be undone. Are you sure you want to delete this event (<b>{event.title}</b>)?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="danger" onClick={deleteCard}>
                Delete Event 
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default DeleteEventModal;