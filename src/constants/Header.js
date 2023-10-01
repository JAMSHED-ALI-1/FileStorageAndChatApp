import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, ICONS, SIZES} from './theme';

// const data = [
//   {
//     id:'1',
//     img : ICONS.find
//   },
//   {
//     id:'2',
//     img : ICONS.add
//   },
//   {
//     id:'3',
//     img : ICONS.filter
//   }
// ]

const Header = props => {
  const {find, add, filter,findModal, addModal, filterModal, onPressBack, title, backIcon, notife, clearNotife} = props;
  return (
    <View style={styles.header}>
        {backIcon ? ( <TouchableOpacity onPress={onPressBack}>
        <Image
          source={require('../assets/images/chevron.left.png')}
          resizeMode="contain"
          style={{width:28, height:28}}
        />
      </TouchableOpacity>) : null}
      <View style={{flex:1}}>
      <Text style={styles.heading}>{title}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {find ? (
          <TouchableOpacity onPress={findModal}>
            <Image source={ICONS.find} style={styles.icon} />
          </TouchableOpacity>
        ) : null}
        {add ? (
          <TouchableOpacity onPress={addModal}>
            <Image source={ICONS.add} style={styles.icon1} />
          </TouchableOpacity>
        ) : null}
        {filter ? (
          <TouchableOpacity onPress={filterModal}>
            <Image source={ICONS.filter} style={styles.icon2} />
          </TouchableOpacity>
        ) : null}
        {notife ? (
          <TouchableOpacity style={{backgroundColor:COLORS.clear,padding:8, borderRadius:25,
            alignItems: 'center',
            justifyContent: 'center',
          }} onPress={clearNotife} >
            <Text style={{color:COLORS.black,fontFamily:"Gilroy-Regular"}}>Clear All</Text>
          </TouchableOpacity>
        ):null}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: SIZES.padding * 2,
    justifyContent: 'space-between',
    backgroundColor:COLORS.background
  },
  heading: {
    color: COLORS.primary,
    fontFamily: 'Gilroy-SemiBold',
    fontSize: SIZES.h2,
    fontWeight: '400',
    textAlign:'center',
    paddingRight:20
    // alignSelf:'center'
  },
  icon: {
    height: 18,
    width: 18,
    // marginRight:10,
    // marginLeft: 15,
  },
  icon1: {
    height: 18,
    width: 18,
    // marginRight:10,
    marginLeft: 15,
  },
  icon2: {
    height: 18,
    width: 18,
    // marginRight:10,
    marginLeft: 15,
  },
});
