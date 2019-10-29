import { configure } from '@storybook/vue';
import Vue from 'vue';
import formatter from '../plugin/formatter';

Vue.use(formatter);
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
