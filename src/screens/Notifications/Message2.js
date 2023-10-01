import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React from 'react';


import Description from './Description';
import Header from '../../constants/Header';
import { COLORS } from '../../constants/theme';
const {height, width} = Dimensions.get('window');

const Message2 = (props) => {
  const data = [
    {
      data0: 'In publishing and graphic design',
      img: require('./images/Notification.png'),
      data1:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.',
      data2: '10/05/2023, 10:25 AM',
    },
    {
      data0: 'In publishing and graphic design',
      img: require('./images/Notification.png'),
      data1:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.',
      data2: '10/05/2023, 10:25 AM',
    },
    {
      data0: 'In publishing and graphic design',
      img: require('./images/Notification.png'),
      data1:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.',
      data2: '10/05/2023, 10:25 AM',
    },
    {
      data0: 'In publishing and graphic design',
      img: require('./images/Notification.png'),
      data1:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.',
      data2: '10/05/2023, 10:25 AM',
    },
    {
      data0: 'In publishing and graphic design',
      img: require('./images/Notification.png'),
      data1:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.',
      data2: '10/05/2023, 10:25 AM',
    },
    {
      data0: 'In publishing and graphic design',
      img: require('./images/Notification.png'),
      data1:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.',
      data2: '10/05/2023, 10:25 AM',
    },
    {
      data0: 'In publishing and graphic design',
      img: require('./images/Notification.png'),
      data1:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.',
      data2: '10/05/2023, 10:25 AM',
    },
    {
      data0: 'In publishing and graphic design',
      img: require('./images/Notification.png'),
      data1:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.',
      data2: '10/05/2023, 10:25 AM',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.background}}>
      <Header
        title="Message"
        backIcon={true}
        onPressBack={() => props.navigation.goBack()}
      notife={true}
      />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View>
              <View style={styles.flexItems1}>
                <Image
                  source={item.img}
                  style={styles.img1}
                  resizeMode="contain"
                />
                <View>
                  <Text style={styles.txt3}>{item.data0}</Text>
                  <Text style={styles.txt1}>{item.data1}</Text>
                </View>
              </View>
              <View style={styles.txtRight}>
                <Text style={styles.txt2}>{item.data2}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Message2;

const styles = StyleSheet.create({
  flexItems1: {
    flexDirection: 'row',
    marginHorizontal: width * 0.05,
    alignItems: 'center',
    marginTop: height * 0.035,
  },
  img1: {
    height: 34,
    width: 34,
  },
  txt1: {
    color: '#00000099',
    marginLeft: 9,

    fontFamily: 'Gilroy-Regular',
    fontSize: 13,
    marginHorizontal: 16,
  },
  txt2: {
    textAlign: 'right',
    color: '#00000099',
    fontSize: 12,
  },
  txtRight: {
    marginTop: 4,
    marginHorizontal: width * 0.08,
  },
  txt3: {
    color: 'black',
    marginLeft: 9,
    fontFamily: 'Gilroy-Medium',
    bottom: 4,
    fontSize: 14,
  },
});
