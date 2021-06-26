
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Axios from 'axios'
import {Button} from 'native-base'

// const key= "somerandom keywith123"
// const URL = `https://randomuser.me/api/${key}/params`

const App = () => {

  const [details, setDetails] = useState(null)

  const fetchDetails = async () => {
    try {
      
       const {data} = await Axios.get('https://randomuser.me/api/');
       const details = data.results[0];
       console.log(details)

       setDetails(details)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchDetails()
  }, [])

  if (!details) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  } else{
    return(
      <View style={styles.container}>
          <Button
          rounded
          style={styles.button}
          onPress={() => fetchDetails()}
          >
            <Text>New User</Text>
          </Button>
        </View>
    )
  }

  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222831"
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30
  }
})