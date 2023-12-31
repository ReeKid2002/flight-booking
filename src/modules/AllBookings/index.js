import './AllBookings.css';

const AllBookings = () => {
  return (
    <div className='user-bookings'>
        <div className='title'>All Bookings</div>
        <div className='all-bookings'>
            <div className='booked-flight'>
                <div>Flight Name</div>
                <div>Time In</div>
                <div>Time Out</div>
            </div>
        </div>
    </div>
  );
};

export default AllBookings;
