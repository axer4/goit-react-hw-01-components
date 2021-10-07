import { useDebugValue } from 'react';
import styles from '../styles/FriendList.module.css';
import PropTypes from 'prop-types' 
export default function FriendsListItem({ isOnline, avatar, name }) {
    return (<li className={styles.item}>
        {isOnline ? <span className={styles.isOnline}></span> : <span className ={styles.status}></span>}
  <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{ name }</p>
</li> )
}

FriendsListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
}