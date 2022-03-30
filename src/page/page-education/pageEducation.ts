import '@/page/page-education/page-education.scss';
import Page from '@/page/Page';
import ListItem from '@/components/list-item/ListItem';
import Psu from '@/images/psu.jpg';
import JavascriptInfo from '@/images/javascript-info.png';

const listItemOne = new ListItem({
  image: Psu,
  title: 'Penza State University',
  subtitle: '2011 - 2016'
});
const listItemTwo = new ListItem({
  image: JavascriptInfo,
  title: 'JavaScript.info </br> "JavaScript/DOM/UI for programmers"',
  subtitle: '03.02.2020 - 21.03.2020'
});

const list = [listItemOne.template, listItemTwo.template];

export default new Page({
  slug: 'education',
  title: 'Education',
  content: list.join('')
});
