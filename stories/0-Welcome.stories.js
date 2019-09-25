import { linkTo } from '@storybook/addon-links';

import Welcome from '../src/Welcome';

export default {
  title: 'Welcome',
};

export const toStorybook = () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
});

toStorybook.story = {
  name: 'to Storybook',
};
