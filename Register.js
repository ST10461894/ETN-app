import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function App({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalFees, setTotalFees] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [discountMessage, setDiscountMessage] = useState('');

  const courses = [
    { id: 1, name: 'First Aid', price: 1500 },
    { id: 2, name: 'Landscaping', price: 1500 },
    { id: 3, name: 'Life Skills', price: 1500 },
    { id: 4, name: 'Sewing', price: 1500 },
    { id: 5, name: 'Garden Maintenance', price: 750 },
    { id: 6, name: 'Cooking', price: 750 },
    { id: 7, name: 'Child Minding', price: 750 },
  ];

  const handleCourseSelection = (course) => {
    if (selectedCourses.includes(course.id)) {
      setSelectedCourses(selectedCourses.filter(id => id !== course.id));
    } else {
      setSelectedCourses([...selectedCourses, course.id]);
    }
    setErrorMessage('');
  };

  const calculateTotalFees = () => {
    if (selectedCourses.length === 0) {
      setErrorMessage('Please select a course.');
      return;
    }

    const baseTotal = selectedCourses.reduce((acc, id) => {
      const course = courses.find(course => course.id === id);
      return acc + (course ? course.price : 0);
    }, 0);

    let discount = 0;
    let message = 'No discount applied';

    if (selectedCourses.length === 2) {
      discount = 0.05;
      message = '5% discount applied';
    } else if (selectedCourses.length === 3) {
      discount = 0.1;
      message = '10% discount applied';
    } else if (selectedCourses.length > 3) {
      discount = 0.15;
      message = '15% discount applied';
    }

    const discountedTotal = baseTotal - (baseTotal * discount);
    setTotalFees(discountedTotal);
    setDiscountMessage(message);
    setErrorMessage('');
  };

  const resetForm = () => {
    setTotalFees(0);
    setSelectedCourses([]);
    setErrorMessage('');
    setConfirmationMessage('');
    setDiscountMessage('');
  };

  const handleBooking = () => {
  if (!fullName || !phoneNumber || !email || selectedCourses.length === 0) {
    setErrorMessage('Please complete form.');
    setConfirmationMessage(''); // Clear confirmation message
  } else {
    setConfirmationMessage('Thank you for registering, will be in contact shortly.');
    setErrorMessage(''); // Clear error message if booking is successful
  }
};

// ... component code


  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Register</Text>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Full Names:</Text>
      <TextInput style={styles.input} value={fullName} onChangeText={setFullName} />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={text => {
          const numericText = text.replace(/[^0-9]/g, '');
          setPhoneNumber(numericText);
        }}
        keyboardType='numeric'
      />

      <Text style={styles.label}>Email Address:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Course Selection:</Text>
      <View style={styles.courseContainer}>
        {courses.map(course => (
          <View key={course.id} style={styles.courseRow}>
            <TouchableOpacity
              style={[
                styles.checkbox,
                selectedCourses.includes(course.id) && styles.checkboxSelected,
              ]}
              onPress={() => handleCourseSelection(course)}
            >
              {selectedCourses.includes(course.id) && <Text style={styles.checkmark}>✔</Text>}
            </TouchableOpacity>
            <Text style={styles.courseText}>{course.name}</Text>
            <Text style={styles.priceText}>R{course.price}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.calculateButton} onPress={calculateTotalFees}>
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={resetForm}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>

      <Text style={styles.totalFeesText}>Total Fees= R{totalFees.toFixed(2)}</Text>
      <Text style={styles.discountMessageText}>{discountMessage}</Text>

      <TouchableOpacity style={styles.bookingButton} onPress={handleBooking}>
        <Text style={styles.bookingButtonText}>Make Booking</Text>
      </TouchableOpacity>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      {confirmationMessage ? <Text style={styles.confirmationText}>{confirmationMessage}</Text> : null}
      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  homeButton: {
    backgroundColor: '#B0E0E6',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#B3E5FC',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#BBDEFB',
  },
  courseContainer: {
    backgroundColor: '#B3E5FC',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  courseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  courseText: {
    fontSize: 16,
    flex: 2,
  },
  priceText: {
    fontSize: 16,
    flex: 1,
    textAlign: 'right',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: '#000',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
  },
  calculateButton: {
    backgroundColor: '#0288D1',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  resetButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  totalFeesText: {
    fontSize: 18,
    marginVertical: 20,
  },
  discountMessageText: {
    fontSize: 16,
    marginVertical: 10,
  },
  bookingButton: {
    backgroundColor: '#B0E0E6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookingButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  errorText: {
    color: '#FF0000',
    fontSize: 16,
    marginTop: 10,
  },
  confirmationText: {
    color: '#008000',
    fontSize: 16,
    marginTop: 10,
  },
  footer: {
    height: 50,
  },
});
