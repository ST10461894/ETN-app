import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome</Text>
        <TouchableOpacity style={styles.contactButton}onPress={() =>navigation.navigate('Contact')}>
          <Text style={styles.contactButtonText}>Contact</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/19535cd7343f67810d90082181456b9b' }} // 
          style={styles.bannerImage}
        />
      </View>

      <Text style={styles.description}>
        Empowering the Nation was created to provide skills training for domestic workers and gardeners in order for them to be more marketable when seeking employment, receive higher pay due to acquired skills or set up their own business utilizing these new skills.
      </Text>

      <Text style={styles.sectionTitle}>Expand your skillset with our courses</Text>

      <Text style={styles.courseType}>6 month courses:</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('Sewing')}>
          <Text>Sewing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.courseButton} onPress={() =>navigation.navigate('LifeSkills')}><Text>Life Skills</Text></TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.courseButton} onPress={() =>navigation.navigate('Landscaping')}><Text>Landscaping</Text></TouchableOpacity>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('FirstAid')}><Text>First Aid</Text></TouchableOpacity>
      </View>

      <Text style={styles.courseType}>6 week courses:</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('Childminding')}><Text>Child Minding</Text></TouchableOpacity>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('Cooking')}><Text>Cooking</Text></TouchableOpacity>
      </View> 
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('Gardenmaintenance')}><Text>Garden Maintenance</Text></TouchableOpacity>
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
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
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
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius:10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  courseButton: {
    backgroundColor: '#B0E0E6',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    width: '45%',
    marginBottom: 10,
  },
});
