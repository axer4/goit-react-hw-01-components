import styles from '../styles/Profile.module.css';
import PropTypes from 'prop-types' 
console.log(styles);
export default function Profile({ name, stats, avatar, tag, location }) {
    return (<div className={styles.profile}>
  <div className={styles.description}>
    <img
      src= {avatar}
      alt={name}
      className="avatar"
    />
            <p className="name">{name}</p>
            <p className="tag">{tag }</p>
            <p className="location">{location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers:</span>
                <span className={styles.quantity}>{ stats.followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views:</span>
                <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes:</span>
                <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>)
}
Profile.propTypes = {
  name: PropTypes.string,
  stats: PropTypes.object,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string
}