import axios from 'axios';

export const createTrip = (trip) => (
  axios.post('/trips', trip)
);

export const fetchTrip = (id) => (
  axios.get('/trips', {
    id: id,
  })
);

export const fetchTrips = (userId) => (
  axios.get('/trips', {
    userId: userId,
  })
);
