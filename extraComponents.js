// render card
<Card title={job.title} containerStyle={{ height: 600 }}>
	<View style={{ height: 300, marginBottom: 20 }}>
		<MapView
			scrollEnabled={false}
			style={{ flex: 1 }}
			cacheEnabled={true}
			initialRegion={{
				longitude: -122,
				latitude: 37,
				longitudeDelta: 0.04,
				latitudeDelta: 0.09
			}}
		/>
	</View>
	<View
		style={{
			flexDirection: "row",
			justifyContent: "space-around",
			marginBottom: 10
		}}
	>
		<Text>{job.company}</Text>
		<Text>{job.type}</Text>
	</View>
	<HTML html={jobDesc} />
</Card>

// render no more cards
<Card title="No more jobs!">
	<Button
		title="Back To Map"
		icon={{ name: "my-location", color: "white" }}
		buttonStyle={{ backgroundColor: "#E43F3F", height: 50 }}
		onPress={() => {}}
	/>
</Card>

// Review Card 
<Card title={title} titleStyle={{ fontSize: 15 }} key={id}>
	<View style={{ height: 200 }}>
		<MapView
			style={{ flex: 1 }}
			cacheEnabled={true}
			scrollEnabled={false}
			initialRegion={{
				longitude: -122,
				latitude: 37,
				longitudeDelta: 0.04,
				latitudeDelta: 0.09
			}}
		/>
	</View>
	<View
		style={{
			marginTop: 10,
			marginBottom: 10,
			flexDirection: "row",
			justifyContent: "space-around"
		}}
	>
		<Text style={{ fontStyle: "italic" }}>{company}</Text>
		<Text style={{ fontStyle: "italic" }}>{created_at}</Text>
	</View>
	<Button
		title="Apply Now!"
		onPress={() => Linking.openURL(url)}
		buttonStyle={{ backgroundColor: "#E43F3F" }}
	/>
</Card>
