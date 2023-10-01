import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import Header from '../../constants/Header';
import { COLORS, ICONS } from '../../constants/theme';
import DocModal from '../../constants/DocModal';
import CreateModal from '../../constants/CreateModal';
import FilterModal from '../../constants/FilterModal';
import { width } from '../LinkedDomain/responsiveui';

const ViewData = [
  {
    type: 'Folder',
    img: ICONS.folder,
    title: 'KYC',
    more: ICONS.more,
  },
  {
    type: 'Image',
    img: ICONS.img,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  },
  {
    type: 'Folder',
    img: ICONS.folder,
    title: 'KYC',
    more: ICONS.more,
  },
  {
    type: 'Image',
    img: ICONS.img,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  },
  {
    type: 'Folder',
    img: ICONS.folder,
    title: 'KYC',
    more: ICONS.more,
  },
  {
    type: 'Image',
    img: ICONS.img,
    title: 'IMG_296582.jpg',
    more: ICONS.more,
  },
];

const data = [
  {
    id: '1',
    view: ICONS.grid,
    viewType: 'Grid',
  },
  {
    id: '2',
    view: ICONS.list,
    viewType: 'List',
  },
];

const Document = (props) => {
  const filteredFolder = useMemo(() => {
    return ViewData.filter(item => item.type === 'Folder');
  }, [ViewData]);
  const filteredImage = useMemo(() => {
    return ViewData?.filter(item => item.type === 'Image');
  }, [ViewData]);

  const [list, setList] = useState('List');
  console.log("ffffddd", list)
  const [isOpen, setIsOpen] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const RenderListViewData = ({ item }) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: COLORS.boderColor,
            borderBottomWidth: 1,
            paddingVertical: 20,
          }}>
          {/* <TouchableOpacity onPress={() => props.navigation.navigate("KYCFiles")}> */}
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              columnGap: 10,
            }}>
            <Image style={styles.img} resizeMode="contain" source={item.img} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          {/* </TouchableOpacity> */}
          <TouchableOpacity onPress={() => setIsOpen(true)}>
            <Image
              style={styles.more}
              resizeMode="contain"
              source={item.more}
            />
          </TouchableOpacity>
        </View>
        <DocModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </View>
    );
  };

  const RenderGridViewData = ({ item }) => {
    return (
      <View
        style={{
          width: width * 0.43,
          borderRadius: 15,
          borderWidth: 1,
          margin: 5,
          marginTop: 5,
        }}>
        {console.log("itemitem", item)}

        <View
          style={{
            flexDirection: 'column',
            rowGap: 15,
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            borderBottomColor: COLORS.faint,
            paddingVertical: 15,
          }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => props.navigation.navigate("KYCFiles")}>
              <Image style={styles.img} resizeMode="contain" source={item.img} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => setIsOpen(true)}>
              <Image
                style={styles.more}
                resizeMode="contain"
                source={item.more}
              />
            </TouchableOpacity>
          </View>
        </View>
        <DocModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Header
        add={true}
        filter={true}
        find={true}
        backIcon={true}
        title="Document"
        addModal={() => setCreateModal(true)}
        findModal={() => props.navigation.navigate('Search')}
        filterModal={() => setOpenFilter(true)}
        onPressBack={() => props.navigation.goBack()}

      />
      <View style={styles.main}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <View>
            <Text style={styles.FolderText}>Documents Folders</Text>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {data && data?.map((item, index) => (
              <View>
                <TouchableOpacity onPress={() => setList(item.viewType)} >
                  <Image
                    style={{ width: 40, height: 40, marginLeft: 10, borderWidth: list === item.viewType ? 1 : 0, borderColor: list === item.viewType ? 'rgba(0, 0, 0, 0.25)' : "#fff", borderRadius: 50 }}
                    resizeMode="contain"
                    source={item.view}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
        <FlatList
          renderItem={
            list === 'List' ? RenderListViewData : RenderGridViewData
          }
          numColumns={list === 'List' ? 1 : 2}
          key={list}
          data={filteredFolder}
        />
        <Text style={styles.ImgText}> Documents Images</Text>
        <View style={{}}>
          <FlatList
            renderItem={
              list === 'List' ? RenderListViewData : RenderGridViewData
            }
            key={list === "List" ? "List" : "Grid"}
            numColumns={list === 'List' ? 1 : 2}
            data={filteredImage}
          />
        </View>

      </ScrollView>
      <CreateModal isOpen={createModal} setIsOpen={setCreateModal} />
      <FilterModal isOpen={openFilter} setIsOpen={setOpenFilter} />
    </SafeAreaView>
  );
};

export default Document;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 16,
  },
  more: {
    width: 10,
    height: 20,
  },
  img: {
    width: 45,
    height: 45,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Gilroy-Regular',
    color: COLORS.heading,
  },
  FolderText: {
    paddingHorizontal: 5,
    color: COLORS.heading,
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
  },
  ImgText: {
    color: COLORS.heading,
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    paddingTop: 15,
    paddingVertical: 12
  },
});
