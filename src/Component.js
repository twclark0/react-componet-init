import styles from './Component.css';

export default (props) => (
    <button className={styles.button} style={props.css}>
      Click Me
    </button>
);
