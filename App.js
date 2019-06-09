/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { GetMyLocation } from "./components/GetMyLocation";

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
