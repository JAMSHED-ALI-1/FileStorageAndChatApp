import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../constants/Header';
import {COLORS, ICONS, IMAGES} from '../../constants/theme';

const data = [
  {
    img: ICONS.file,
    title: 'John Doe',
    info: 'Specified -> Arvind',
  },
  {
    img: ICONS.img,
    title: 'John Doe',
    info: 'Specified -> Arvind',
  },
  {
    img: ICONS.file,
    title: 'John Doe',
    info: 'Specified -> Arvind',
  },
  {
    img: ICONS.img,
    title: 'John Doe',
    info: 'Specified -> Arvind',
  },
  {
    img: ICONS.file,
    title: 'John Doe',
    info: 'Specified -> Arvind',
  },
];

const renderSearchData = ({item}) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: COLORS.boderColor,
        flexDirection: 'row',
        paddingVertical: 15,
      }}>
      <View style={{flexDirection: 'column'}}>
        <Image source={item.img} style={{width: 45, height: 45}} />
      </View>
      <View
        style={{
          marginLeft: 15,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize:16, fontFamily:'Gilroy-Regular', color:COLORS.heading}}>{item.title}</Text>
        <View style={{flexDirection: 'row', columnGap: 60}}>
          <Text style={{ fontSize:12, color:"rgba(0, 0, 0, 0.6)"}}>{item.info}</Text>
        </View>
      </View>
    </View>
  );
};

const Search = (props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.background}}>
      <Header title="Seacrh" 
            backIcon={true}
            onPressBack={()=>props.navigation.goBack()}
      />
      <View style={{paddingHorizontal: 16}}>
        <Image
          source={ICONS.seacrh}
          style={styles.seacrh}
          resizeMode="contain"
        />
        <TextInput
          style={styles.searchbar}
          placeholder="search by file/doc name"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}></View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderSearchData}
          contentContainerStyle={{paddingBottom: 70}}
          ListEmptyComponent={() => {
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={IMAGES.nodata} style={{height: 170, width: 170}} />
              <Text>No Search Result Found!</Text>
            </View>;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchbar: {
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: COLORS.searchbar,
    borderColor: COLORS.searchbar,
    paddingLeft: 60, // Adjusted for better padding
    paddingRight: 16,
    marginTop: 10,   // Give some margin top for better spacing
    height: 40,     // Consider specifying a height for consistent look
  },

  seacrh: {
    width: 22,
    height: 22,
    top: 20,    // Adjusted
    left: 35,   // Adjusted
    position: 'absolute',
    zIndex: 1,  // Ensure it's above the text input
  },
  
  text: {
    color: COLORS.heading,
    fontSize: 16,       // Increased font size slightly
    fontFamily: 'Gilroy-Medium',
    marginVertical: 5, // Vertical spacing for better appearance
  },
});
