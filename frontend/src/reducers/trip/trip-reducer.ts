import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Trip } from '../../interfaces/Trip';
import baseApi from '../api';

export type TripState = {
  trips?: Array<Trip>
};

const initialState : TripState = {
  trips: []
};

const slice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setTrips: (
      state,
      { payload: trips }: PayloadAction<Array<Trip> | undefined>
    ) => {
      state.trips = trips;
    },
    addTrip: (
      state,
      { payload: trip }: PayloadAction<Trip>
    ) => {
      state.trips = state.trips ? [...state.trips, trip] : [trip];
    },
  }
});

const auth = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrips: builder.query<Array<Trip>, void>({
      query: () => 'trips',
    }),
    addTrip: builder.mutation<unknown, Trip>({
      query: (trip) => ({
        url: '/trips',
        method: 'POST',
        body: trip,
      }),
    }),
    deleteTrip: builder.mutation<unknown, string>({
      query: (id) => ({
        url: `/trips/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTripsQuery,
  useAddTripMutation,
  useDeleteTripMutation
} = auth;

export const { setTrips, addTrip } = slice.actions;

export default slice.reducer;
