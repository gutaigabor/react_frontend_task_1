import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text, Wrap } from "@chakra-ui/react";
import { setTrips, useGetTripsQuery } from "../../reducers/trip";
import { RootState } from "../../store";
import { Trip } from "../../interfaces/Trip";
import TripElement from "../../components/TripElement";

export const TripPage = () => {
  /* ----- Initialize ----- */
  const dispatch = useDispatch();
  const { data, error } = useGetTripsQuery();

  const trips = useSelector<RootState, Array<Trip> | undefined>(state => state.trip.trips);

  /* ----- Setup subscriptions */
  useEffect(() => {
    dispatch(setTrips(data));
  }, [data]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  
  /* ----- Render ----- */
  return (
    <Box>
      <Wrap spacing='30px' justify='center' m='20px'>
        { trips && trips.length > 0 ?
          trips.map((trip, index) => {
            return (
              <TripElement key={index} trip={trip}/>
            );
          })
          :
          <Text>No trips found</Text>
        }
      </Wrap>
    </Box>
  )
}