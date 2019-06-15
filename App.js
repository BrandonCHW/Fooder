/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";
import { GetMyLocation } from "./components/GetMyLocation";
import { GetMCPho } from "./components/YelpFusionAPI";

const getBusinessByPhoneUrl = "https://api.yelp.com/v3/businesses/search";
const apiKey = "Bearer xLyE5OR2Dgqb5c_RfOC99Aot36lMIf7Bsf3CAG6u6bZxaOuOrBpqjbSyTL1byX_rU2HRjaLC5wFQ1iUndCTCX2yQHB61CgzEG1kd0r_lk1hLvmDfe20lYrYFz4r8XHYx";

type Props = {};
type State = {
	latitude: number,
	longitude: number
};
export default class App extends Component<Props, State> {
	constructor() {
		super();
		this.state = {
			latitude: 0,
			longitude: 0
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<GetMyLocation onGetLocation={this.handleFetchLocation} />
				<Text>Latitude: {this.state.latitude}</Text>
				<Text>Longitude: {this.state.longitude}</Text>
				<GetMCPho onGetNearbyRestaurant={this.getNearbyRestaurant}></GetMCPho>
			</View>
		);
	}

	changeCoords(lat: number, long: number) {
		this.setState({
			latitude: lat,
			longitude: long
		});
	}

	handleFetchLocation = () => {
		console.log("get my location pressed");
		navigator.geolocation.getCurrentPosition(
			pos => {
				this.changeCoords(pos.coords.latitude, pos.coords.longitude);
				console.log(pos);
			},
			err => console.log("couldn't get location")
		);
	};

	getNearbyRestaurant = async () => {
		console.log("Getting nearby restaurant...");
		// const request = await axios.get(getBusinessByPhoneUrl, {
		// 	auth: apiKey,
		// 	params: {
		// 		phone: "\+14509040660" // MC PHO Brossard
		// 	}
		// }).then(r => console.log(r));
		const instance = axios.get(
			"https://api.yelp.com/v3/businesses/search/phone?phone=+14509040660", {
				headers: { 'Authorization': apiKey },
			}
		)
		.then(r => console.log(r))
		.catch(err => console.log(err));
		// const request = await axios.get("https://postman-echo.com/get").then(r => console.log(r));
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#80CFF1"
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
});
