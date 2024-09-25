import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function App({navigation}) {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/19535cd7343f67810d90082181456b9b' }} // 
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton} onPress={() =>navigation.navigate('Contact')}>
          <Text style={styles.contactButtonText}>Contact</Text>
        </TouchableOpacity>
      </View>

      {/* Main Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b9e15963cd82a13bf2011d9c19c2634e' }} // Replace 
          style={styles.mainImage}
        />
      </View>

      {/* Course Information */}
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>Landscaping</Text>
        <Text style={styles.courseDuration}>Six-month course</Text>
        <View style={styles.navigationButtons}>
          <TouchableOpacity onPress={() => navigation.navigate('LifeSkills')}>
            <Text style={styles.navButton}>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>navigation.navigate('FirstAid')}>
            <Text style={styles.navButton}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Purpose and Content Section */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Purpose:</Text>
        <Text style={styles.infoText}>To provide landscaping services for new and established gardens</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Content:</Text>
        <Text style={styles.infoText}>• indigenous and exotic plants and trees</Text>
        <Text style={styles.infoText}>• Fixing structures (foundation, status, benches, tables, built-in braii)</Text>
        <Text style={styles.infoText}>• Balancing of plants and trees in a garden</Text>
        <Text style={styles.infoText}>• Aesthetics of plant shapes and colours</Text>
        <Text style={styles.infoText}>• Garden Layout</Text>
      </View>

      {/* Fees and Actions */}
      <Text style={styles.feesText}>Fees: R1500</Text>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}onPress={() =>navigation.navigate('Register')}><Text>Register</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}onPress={() =>navigation.navigate('Enquire')}><Text>Enquire</Text></TouchableOpacity>
      </View>
      <View style={styles.footer}><Text>  </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0F0FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerIcon: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  contactButton: {
    backgroundColor: '#B0E0E6',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  contactButtonText: {
    fontSize: 16,
    color: '#000',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  courseInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  courseDuration: {
    fontSize: 16,
    color: '#555',
  },
  navigationButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  navButton: {
    fontSize: 24,
    marginHorizontal: 20,
  },
  infoBox: {
    backgroundColor: '#CFE9FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
  },
  feesText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#B0E0E6',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
});

