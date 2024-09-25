// EnquiryScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function EnquiryScreen({navigation}) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSend = () => {
    if (!fullName || !phoneNumber || !email || !message) {
      setFeedbackMessage('Please complete all sections.');
    } else {
      setFeedbackMessage('Thanks for your enquiry, we will get back to you shortly.');
      // Reset form fields
      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Enquire</Text>
        <TouchableOpacity style={styles.contactButton}onPress={() =>navigation.navigate('Home')}>
          <Text style={styles.contactText}>Home</Text>
        </TouchableOpacity>
      </View>

      {/* Full Name Input */}
      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Phone Number Input */}
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      {/* Email Address Input */}
      <Text style={styles.label}>Email Address:</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Message Input */}
      <Text style={styles.label}>Message:</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder=""
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />

      {/* Send Button */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>

      {/* Feedback Message */}
      {feedbackMessage ? <Text style={styles.feedback}>{feedbackMessage}</Text> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F0FF',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40, // Extra padding to avoid content being cut off at the bottom
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contactButton: {
    backgroundColor: '#B0E0E6',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  contactText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#B0E0E6',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  messageInput: {
    height: 100,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  feedback: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});
