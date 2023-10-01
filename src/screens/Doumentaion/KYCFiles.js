import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../constants/Header';
import { COLORS, ICONS } from '../../constants/theme';
import { width } from '../LinkedDomain/responsiveui';
import FilterModal from '../../constants/FilterModal';
import CreateModal from '../../constants/CreateModal';
const ViewData = [
  {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  },
  {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  },
  {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  },
  {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  },
  {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  },
  {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  },
  {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  }, {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  }, {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  }, {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  }, {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  }, {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  }, {
    type: 'Image',
    img: ICONS.addhar,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  },
];

const RenderGridViewData = ({ item }) => {
  return (
    <View
      style={{
        width: width * 0.43,
        borderRadius: 15,
        borderWidth: 1,
        margin: 5,
        marginTop: 5,
        borderColor: 'rgba(0, 0, 0, 0.15)'
      }}>
      <View
        style={{
          flexDirection: 'column',
          rowGap: 15,
          paddingHorizontal: 15,
          justifyContent: 'space-between',
          borderBottomColor: COLORS.faint,
          paddingVertical: 15,
          overflow: 'hidden'
        }}>

        <Image style={styles.img} resizeMode="contain" source={item.img} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity>
            <Image
              style={styles.more}
              resizeMode="contain"
              source={item.more}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const KYCFiles = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [createModal, setCreateModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Header title="KYC Files" backIcon={true} find={true} add={true}
        filter={true}
        onPressBack={() => props.navigation.goBack()}
        addModal={() => setCreateModal(true)}
        filterModal={() => setIsOpen(true)}
      />
      <View style={{ padding: 16, paddingBottom: 80 }}>
        <FlatList
          data={ViewData}
          renderItem={RenderGridViewData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <FilterModal setIsOpen={setIsOpen} isOpen={isOpen} />
      <CreateModal isOpen={createModal} setIsOpen={setCreateModal} />
    </SafeAreaView>
  );
};

export default KYCFiles;

const styles = StyleSheet.create({
  more: {
    width: 10,
    height: 20,
  },
  img: {
    width: 150,
    height: 80,
    overflow: 'hidden'

  },
  title: {
    fontSize: 14,
    fontFamily: 'Gilroy-Regular',
    color: COLORS.heading,
  },
  FolderText: {
    color: COLORS.heading,
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
  },
  ImgText: {
    color: COLORS.heading,
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    paddingTop: 15,
  },
});
