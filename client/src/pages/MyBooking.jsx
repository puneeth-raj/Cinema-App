import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'

const MyBooking = () => {

    const currency = import.meta.env.CURRENCY
    const [bookings, setBookings] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const getMyBookings = async ()=>{
        setBookings(dummyBookingData)
        setIsLoading(false)
    }
    useEffect(()=>{
        getMyBookings()
    })
  return !isLoading?(

    <div>
        <p className=''>My Booling</p>
    </div>

  ):
  <Loading/>
}

export default MyBooking