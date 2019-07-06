import axios from "axios";
import React from "react";
import { Button } from "react-native";


const getBusinessByPhoneUrl = "https://api.yelp.com/v3/businesses/search";
const apiKey = "Bearer xLyE5OR2Dgqb5c_RfOC99Aot36lMIf7Bsf3CAG6u6bZxaOuOrBpqjbSyTL1byX_rU2HRjaLC5wFQ1iUndCTCX2yQHB61CgzEG1kd0r_lk1hLvmDfe20lYrYFz4r8XHYx";

export const GetMCPho = (props) => {
    return (
        <Button title = "Get 10 Restaurants"
            onPress={props.onGetNearbyRestaurant}>

            </Button>
    )
}
