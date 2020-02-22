import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  onDoneHandler = () => {
    this.setState({ showRealApp: true })
  }

  renderItemHandler = ({ item }) => {
    return (
      <View style={styles.renderItemContainer}>
        <Image source={item.image} />
        <Text style={styles.rendertitle}>{item.title}</Text>
        <Text style={styles.renderSteps}>{item.steps}</Text>
        <View style={{ width: '90%' }}>
          <Text style={styles.renderDescription}>{item.description}</Text>

        </View>
        {/* <TouchableOpacity>
          <Text>rocket launch</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
  nextButtonHander = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f56642', width: '50%', height: 50, marginLeft: 140, marginTop: 90, borderTopLeftRadius: 25, borderBottomLeftRadius: 25 }}>
        <Text style={{ fontSize: 24, color: 'white' }}>NEXT</Text>
      </View>
    )
  }

  DoneButtonHandler = () => {
     return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f56642', width: '50%', height: 50, marginLeft: 140, marginTop: 90, borderTopLeftRadius: 25, borderBottomLeftRadius: 25 }}>
        <Text style={{ fontSize: 24, color: 'white' }}>START</Text>
      </View>
     )
  }

  prevButtonHandler = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e3dfde', width: '90%', height: 50, marginTop: 90, marginLeft: -20,borderTopRightRadius:25,borderBottomRightRadius:25 }}>
        <Text style={{ fontSize: 24, color: '#9c8984' }}>BACK</Text>
      </View>
    )
  }

  skipButtonHandler = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e3dfde', width: '90%', height: 50, marginTop: 90, marginLeft: -20,borderTopRightRadius:25,borderBottomRightRadius:25 }}>
        <Text style={{ fontSize: 24, color: '#9c8984' }}>SKIP</Text>
      </View>
    )
  }

  render() {
    if (this.state.show) {
      return (
        <View style={styles.container}>
          <Text>working nasty</Text>
        </View>
      )
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this.renderItemHandler}
          onDone={this.onDoneHandler}
          paginationStyle={{marginBottom:140}}
          showSkipButton={true}
          showPrevButton={true}
          dotStyle={{ backgroundColor: 'white', borderColor: '#f56642', borderWidth: 1 }}
          activeDotStyle={{ backgroundColor: '#f56642', width: 25, height: 13, borderRadius: 10 }}
          renderNextButton={this.nextButtonHander}
          renderDoneButton={this.DoneButtonHandler}
          renderPrevButton={this.prevButtonHandler}
          renderSkipButton={this.skipButtonHandler}
        />

      )
    }

  }
}

const slides = [
  {
    key: 1,
    title: 'Sign Up',
    steps: 'step 1',
    description: 'Complete your profile in less than 5 minutes to get accurate results',
    image:require('./assets/pic1.png')
  },
  {
    key: 2,
    title: 'Match with Grants',
    steps: 'step 2',
    description: 'Upon Profile completion our system will find you the right grams and push them to you',
    image:require('./assets/pic2.png')
  },
  {
    key: 3,
    title: 'Select and Apply',
    steps: 'step 3',
    description: 'Select the grants of your choice and apply online',
    image:require('./assets/pic3.png')
  }
]

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderItemContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rendertitle: {
    // fontWeight:30,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical:10
  },
  renderSteps: {
    fontSize: 12,
    color: '#d3d3d3',
    marginTop:0,
    marginBottom:5
  },
  renderDescription: {
    //  width:'78%',
    fontSize: 15,
    textAlign: 'justify',
    paddingLeft: 30,
    paddingRight: 30
  }
});
