import React from "react";
import { Button } from "react-native";

export const GetMyLocation = (props) => {
    return (
        <Button title="Get My Location"
                onPress={props.onGetLocation}></Button>
    );
}