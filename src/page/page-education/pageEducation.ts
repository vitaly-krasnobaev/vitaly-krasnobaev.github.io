import '@/page/page-education/page-education.scss';
import Page from '@/page/Page';
import ListItem from '@/components/list-item/ListItem';
import Psu from '@/images/psu.jpg';

const listItem = new ListItem({
  image: Psu,
  title: 'Penza State University',
  subtitle: '2011 - 2016'
});

export default new Page({
  slug: 'education',
  title: 'Education',
  content: listItem.template
});
