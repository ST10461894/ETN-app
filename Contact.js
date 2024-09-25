import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Linking } from 'react-native';

const GOOGLE_MAPS_API_KEY = 'AIzaSyCR8-fYrbm4BB3Mmnmj9GwWsFZuyHsweSE'; //

const addresses = [
  {
    address: '110 Curzon road, Bryanston, JHB',
    mapUrl: `https://maps.googleapis.com/maps/api/staticmap?center=110+Curzon+road,+Bryanston,+JHB&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7C110+Curzon+road,+Bryanston,+JHB&key=${GOOGLE_MAPS_API_KEY}`,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=110+Curzon+road,+Bryanston,+JHB'
  },
  {
    address: '41 De La Rey road, Rivonia, JHB',
    mapUrl: `https://maps.googleapis.com/maps/api/staticmap?center=41+De+La+Rey+road,+Rivonia,+JHB&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:B%7C41+De+La+Rey+road,+Rivonia,+JHB&key=${GOOGLE_MAPS_API_KEY}`,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=41+De+La+Rey+road,+Rivonia,+JHB'
  },
  {
    address: '9 Townsends road, Hyde Park, JHB',
    mapUrl: `https://maps.googleapis.com/maps/api/staticmap?center=9+Townsends+road,+Hyde+Park,+JHB&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C9+Townsends+road,+Hyde+Park,+JHB&key=${GOOGLE_MAPS_API_KEY}`,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=9+Townsends+road,+Hyde+Park,+JHB'
  },
];

export default function App({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Contact</Text>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.label}>Phone Number:</Text>
        {/* Make the phone number clickable */}
        <Text style={styles.link} onPress={() => Linking.openURL('tel:+27720380086')}>
          +27720380086
        </Text>

        <Text style={styles.label}>Email Address:</Text>
        {/* Make the email clickable */}
        <Text style={styles.link} onPress={() => Linking.openURL('mailto:Empoweringthenation@edu.co.za')}>
          Empoweringthenation@edu.co.za
        </Text>

        <Text style={styles.label}>Physical Addresses:</Text>
        {addresses.map((item, index) => (
          <View key={index} style={styles.addressBlock}>
            <Image source={{ uri: item.mapUrl }} style={styles.addressImage} />
            {/* Make the address clickable to open in Google Maps */}
            <Text style={styles.addressLink} onPress={() => Linking.openURL(item.googleMapsUrl)}>
              {item.address}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e6f7ff',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  homeButton: {
    backgroundColor: '#B0E0E6',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  homeButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#e6f7ff',
    padding: 10,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  link: {
    fontSize: 16,
    marginBottom: 15,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  addressBlock: {
    marginBottom: 15,
    alignItems: 'center',
  },
  addressImage: {
    width: '100%',
    height: 150,
    marginBottom: 5,
    borderRadius: 5,
  },
  addressLink: {
    fontSize: 16,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
    backgroundColor: '#cceeff',
    padding: 5,
    borderRadius: 5,
    width: '100%',
  },
});
