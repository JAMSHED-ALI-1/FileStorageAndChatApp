import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: 'rgba(0, 0, 0, 0.92)',
  secondary: 'rgba(0, 0, 0, 0.60)',
  background: 'rgba(255, 255, 255, 0.92)',
  boderColor: 'rgba(0, 0, 0, 0.25)',
  faint: 'rgba(0,0,0,0.5)',
  black: '#000',
  heading: 'rgba(0,0,0,0.87)',
  searchbar: 'rgba(0,0,0,0.03)',
  header: "rgba(0, 0, 0, 0.87)",
  black: "#000000",
  boderColor: "rgba(0, 0, 0, 0.15)",
  grey: "rgba(0, 0, 0, 0.40)",
  clear: "rgba(0, 0, 0, 0.05)",
  red: 'red'

};

export const SIZES = {
  // spacing
  padding: 10,
  py: 10,
  px: 10,
  my: 10,
  mx: 10,

  // font size
  h1: 18,
  h2: 16,
  h3: 14,
  h4: 12,
  heading: 10,
};

export const ICONS = {
  home: require('../assets/images/bottomnavigationimages/Home.png'),
  doc: require('../assets/images/bottomnavigationimages/Document.png'),
  link: require('../assets/images/bottomnavigationimages/Links.png'),
  menu: require('../assets/images/bottomnavigationimages/Menu.png'),
  upload: require('../assets/images/bottomnavigationimages/Upload.png'),
  seacrh: require('../assets/images/search.png'),
  img: require('../assets/images/image.png'),
  file: require('../assets/images/file.png'),
  folder: require('../assets/images/folder.png'),
  find: require('../assets/images/documentationImages/find.png'),
  add: require('../assets/images/documentationImages/add.png'),
  filter: require('../assets/images/documentationImages/filter.png'),
  list: require('../assets/images/documentationImages/list.png'),
  grid: require('../assets/images/documentationImages/grid.png'),
  more: require('../assets/images/documentationImages/more.png'),
  share: require('../assets/images/documentmodalimage/share.png'),
  upload: require('../assets/images/documentmodalimage/upload.png'),
  share: require('../assets/images/documentmodalimage/share.png'),
  move: require('../assets/images/documentmodalimage/move.png'),
  rename: require('../assets/images/documentmodalimage/rename.png'),
  save: require('../assets/images/documentmodalimage/save.png'),
  passport: require('../assets/images/documentmodalimage/passport.png'),
  delete: require('../assets/images/documentmodalimage/delete.png'),
  close: require('../assets/images/documentmodalimage/close.png'),
  info: require('../assets/images/documentmodalimage/info.png'),
  create: require('../assets/images/documentmodalimage/create.png'),
  homeactive: require('../assets/images/bottomnavigationimages/activeHome.png'),
  docactive: require('../assets/images/bottomnavigationimages/activeDoc.png'),
  camera1: require('../assets/images/camera1.png'),
  gallery: require('../assets/images/gallery.png'),
  addhar: require("../assets/images/addhar.png"),
  calender:require("../assets/images/calender.png")
}

export const IMAGES = {
  user: require('../assets/images/User.png'),
  logo: require('../assets/images/appLogo.png'),
  docs: require('../assets/images/Union.png'),
  sync: require('../assets/images/sync.png'),
  cloud: require('../assets/images/cloud.png'),
  recent: require('../assets/images/recent.png'),
  nodata: require('../assets/images/NoData.png'),

}


const appTheme = { COLORS, SIZES, ICONS, IMAGES };
export default appTheme;
