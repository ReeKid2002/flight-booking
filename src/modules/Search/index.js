import './Search.css';
import { useState } from 'react';
import { TextField, Button, Modal } from '@mui/material';

const Search = () => {
    const [ dateTime, setDateTime ] = useState({
        date: '',
        time: '',
    });
    const [ showModal, setShowModal ] = useState(false);
		const handleOpen = () => setShowModal(true);
		const handleClose = () => setShowModal(false);

    return (
        <div className='search'>
            <div className='search-header'>
                <div>Flight Search</div>
                <div className='search-filter'>
                    <TextField variant="outlined" type='date' onChange={(e) => setDateTime({ ...dateTime, date: e.target.value })}/>
                    <TextField variant="outlined" type='time' onChange={(e) => setDateTime({ ...dateTime, time: e.target.value })}/>
                    <Button variant='contained'>Search</Button>
                </div>
            </div>
            <div className='search-results'>
                <div className='search-flight'>
                    <div>Flight Name</div>
                    <div>Time In</div>
                    <div>Time Out</div>
                    <Button variant='contained' onClick={handleOpen}>Book</Button>
                </div>
            </div>
            <Modal
							open={showModal}
							onClose={handleClose}
							className='booking-modal'
            >
							<div className='booking-form'>
								<div className='form-title'>Booking for Flight - FLIGHT_NAME</div>
								<TextField label="Name" variant="outlined" />
								<TextField label="Age" variant="outlined" />
								<Button variant='outlined'>Book</Button>
							</div>
            </Modal>
        </div>
    )
}

export default Search;
