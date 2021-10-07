import styles from '../styles/Statistics.module.css';
import PropTypes from 'prop-types' 
export default function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
            {console.log(title)}
            { title !== undefined &&
                <h2 className={styles.title}>
                {title}
            </h2> }
            <ul className={styles.list}>
                {stats.map(el => (
                    <li className={styles.item} key = {el.id}>
                        <span className={styles.label}>{ el.label }</span>
                    <span className="percentage">{el.percentage}%</span>
    </li>
                ))}
  </ul>
</section>
    )
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats : PropTypes.array
}