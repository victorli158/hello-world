import * as TripAPIUtil from './tripUtil';

export const RECEIVE_ALL_TRIPS = 'RECEIVE_ALL_TRIPS';
export const RECEIVE_TRIP = 'RECEIVE_TRIP';

export const receiveAllTrips = (trips) => ({
  type: RECEIVE_ALL_TRIPS,
  trips
});

export const receiveTrip = (trip) => ({
  type: RECEIVE_TRIP,
  trip
});

export const createTrip = (data) => dispatch => {
  return TripAPIUtil.createTrip(data).then(trip => dispatch(receiveTrip(trip)));
};
