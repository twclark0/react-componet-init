import { storiesOf, action } from '@kadira/storybook';
import Component from './Component';

storiesOf('Component', module)

  .add('test one', () => (<Component text="Red Button" css={{backgroundColor: "red"}} />) )
  .add('test two', () => (<Component text="Blue Button" css={{backgroundColor: "blue"}} />) )
  .add('test three', () => (<Component text="Green Button" css={{backgroundColor: "green"}} />) )
