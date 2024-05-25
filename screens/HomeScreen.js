// src/screens/HomeScreen.js
import React from 'react';
import * as Font from 'expo-font';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.logo}>ANGARA</Text>
      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>❤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>🛒</Text>
        </TouchableOpacity>
      </View>
    </View>
    <TextInput style={styles.searchBar} placeholder="SEARCH" />
    <View style={styles.banner}>
      <Text style={styles.bannerText}>Celebrate Love</Text>
      <Text style={styles.bannerText}>Celebrate Brilliance</Text>
    </View>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SHOP ENGAGEMENT RINGS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CREATE WITH ANGARA</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.productsContainer}>
      {[
        { category: 'Rings', image: require('../images/rings.png') },
        { category: 'Necklaces', image: require('../images/image.png') },
        { category: 'Bracelets', image: require('../images/image copy.png') },
        { category: 'Earrings', image: require('../images/earring.png') },
        { category: 'Lab Diamond Jewelry', image: require('../images/diamond.png') },
        { category: 'GIA Collection', image: require('../images/ringdia.png') }
      ].map((product, index) => (
        <View key={index} style={styles.product}>
          <Image source={product.image} style={styles.productImage} />
          <Text style={styles.productText}>{product.category}</Text>
        </View>
      ))}
    </View>
    <TouchableOpacity style={styles.gemstoneButton}>
      <Text style={styles.gemstoneButtonText}>Start With Natural Gemstone</Text>
    </TouchableOpacity>

    {/* Footer Section */}
    <View style={styles.footer}>
      <Text style={styles.footerTitle}>Contact Us</Text>
      <View style={styles.contactButtons}>
        <TouchableOpacity style={styles.contactButton}>
          <Image source={require('../assets/phone.png')} style={styles.contactIcon} />
          <Text style={styles.contactText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Image source={require('../assets/mail.png')} style={styles.contactIcon} />
          <Text style={styles.contactText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Image source={require('../assets/chat.png')} style={styles.contactIcon} />
          <Text style={styles.contactText}>Chat</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.accordion}>
        <Text style={styles.accordionText}>Customer Service</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accordion}>
        <Text style={styles.accordionText}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accordion}>
        <Text style={styles.accordionText}>Why Angara?</Text>
      </TouchableOpacity>

      <View style={styles.newsletter}>
        <Text style={styles.newsletterText}>
          You're invited! Join our mailing list to get 12% off on your first order, new launches and more!
        </Text>
        <View style={styles.newsletterInputContainer}>
          <TextInput style={styles.newsletterInput} placeholder="Enter Email Address*" />
          <TouchableOpacity style={styles.newsletterButton}>
            <Text style={styles.newsletterButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footerBottom}>
        <Image source={require('../images/rings.png')} style={styles.footerImage} />
        <Text style={styles.footerBottomText}>
          Angara.com Ranked Among Inc. 5000's Fastest-Growing Companies in America
        </Text>

        <View style={styles.socialIcons}>
          <Image source={require('../images/facebook.png')} style={styles.socialIcon} />
          <Image source={require('../images/social.png')} style={styles.socialIcon} />
          <Image source={require('../images/twitter.png')} style={styles.socialIcon} />
          <Image source={require('../images/instagram.png')} style={styles.socialIcon} />
          <Image source={require('../images/youtube.png')} style={styles.socialIcon} />
        </View>

        <View style={styles.paymentIcons}>
          <Image source={require('../images/paypal.png')} style={styles.paymentIcon} />
          <Image source={require('../images/visa.png')} style={styles.paymentIcon} />
          <Image source={require('../images/card.png')} style={styles.paymentIcon} />
          <Image source={require('../images/hands.png')} style={styles.paymentIcon} />
          <Image source={require('../images/apple-pay.png')} style={styles.paymentIcon} />
        </View>
      </View>

      <View style={styles.footerLegal}>
        <Text style={styles.footerLegalText}>
          © 2024 Angara Inc. All Rights Reserved. | Accessibility | Privacy Policy | T&C
        </Text>
      </View>
    </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
},
menuButton: {
  padding: 10,
},
menuButtonText: {
  fontSize: 24,
},
logo: {
  fontSize: 24,
  fontFamily: 'YourCustomFont',
},
headerRight: {
  flexDirection: 'row',
},
iconButton: {
  padding: 10,
},
iconText: {
  fontSize: 24,
},
searchBar: {
  height: 40,
  borderColor: '#ccc',
  borderWidth: 1,
  margin: 10,
  paddingLeft: 10,
  borderRadius: 5,
},
banner: {
  backgroundColor: '#f8e1d9',
  padding: 20,
  alignItems: 'center',
},
bannerText: {
  fontSize: 20,
  fontWeight: 'bold',
},
buttonsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginVertical: 20,
},
button: {
  backgroundColor: '#b3816f',
  padding: 10,
  borderRadius: 5,
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
},
productsContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
},
product: {
  width: '40%',
  alignItems: 'center',
  marginVertical: 10,
},
productImage: {
  width: 100,
  height: 100,
  resizeMode: 'contain',
},
productText: {
  marginTop: 10,
  fontWeight: 'bold',
},
gemstoneButton: {
  backgroundColor: '#008cba',
  padding: 15,
  alignItems: 'center',
  margin: 20,
  borderRadius: 5,
},
gemstoneButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},
footer: {
  backgroundColor: '#f5f5f5',
  padding: 20,
},
footerTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
},
contactButtons: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: 20,
},
contactButton: {
  alignItems: 'center',
},
contactIcon: {
  width: 30,
  height: 30,
},
contactText: {
  marginTop: 5,
  fontSize: 14,
},
accordion: {
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
},
accordionText: {
  fontSize: 16,
},
newsletter: {
  marginVertical: 20,
},
newsletterText: {
  fontSize: 14,
  marginBottom: 10,
},
newsletterInputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
newsletterInput: {
  flex: 1,
  height: 40,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 5,
  paddingLeft: 10,
  marginRight: 10,
},
newsletterButton: {
  backgroundColor: '#000',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
},
newsletterButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},
footerBottom: {
  alignItems: 'center',
  marginVertical: 20,
},
footerImage: {
  width: 100,
  height: 100,
  marginBottom: 10,
},
footerBottomText: {
  textAlign: 'center',
  fontSize: 14,
  marginBottom: 20,
},
socialIcons: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: 20,
},
socialIcon: {
  width: 30,
  height: 30,
  marginHorizontal: 10,
},
paymentIcons: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: 20,
},
paymentIcon: {
  width: 40,
  height: 30,
  marginHorizontal: 10,
},
footerLegal: {
  alignItems: 'center',
},
footerLegalText: {
  textAlign: 'center',
  fontSize: 12,
  color: '#888',
},
});