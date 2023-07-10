import { TextField, Button, Modal } from '@mui/material';
import { useState } from 'react';
import './AdminFlights.css';

const AdminFlights = () => {
	const [ showModal, setShowModal ] = useState(false);
	const handleOpen = () => setShowModal(true);
	const handleClose = () => setShowModal(false);
  return (
    <div className='admin-flights'>
        <div className='admin-flights-header'>
            <div>All Flights</div>
            <Button onClick={handleOpen} variant='contained'>Add Flight</Button>
        </div>
        <div className='admin-flights-all'>
            <div className='admin-flight'>
                <div>Flight Name</div>
                <div>Time In</div>
                <div>Time Out</div>
                <Button variant='contained'>Remove</Button>
            </div>
        </div>
        <Modal
            open={showModal}
            onClose={handleClose}
        >
					<div className='flight-form'>
							<div className='form-title'>Add Flight</div>
							<TextField label="Flight Name" variant="outlined" />
							<TextField label="Time In" variant="outlined" />
							<TextField label="Time Out" variant="outlined" />
							<Button variant='outlined'>ADD</Button>
					</div>
    	</Modal>
    </div>
  )
}

export default AdminFlights;
