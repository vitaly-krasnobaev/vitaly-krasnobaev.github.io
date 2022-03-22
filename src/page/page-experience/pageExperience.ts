import '@/page/page-experience/page-experience.scss';
import Page from '@/page/Page';
import ListItem from '@/components/list-item/ListItem';
import Smarter from '@/images/smarter.jpg';
import Web4site from '@/images/web4site.jpg';

const listItemOne = new ListItem({
  image: Smarter,
  title: 'Frontend Developer at Smarter',
  subtitle: 'June 2019 - Present '
});
const listItemTwo = new ListItem({
  image: Web4site,
  title: 'Webmasterin at Web studio 58',
  subtitle: 'December 2016 - May 2019'
});

const list = [listItemOne.template, listItemTwo.template];

export default new Page({
  slug: 'experience',
  title: 'Experience',
  content: list.join('')
});
