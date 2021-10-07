import FriendsListItem from "./FriendListItem";
import styles from '../styles/FriendList.module.css';
import PropTypes from 'prop-types';
export default function FriendList(props) {
    console.log(props);
    return (<ul className={styles.list}>
        {props.friends.map(el => (
            // console.log(el.avatar)
            (<FriendsListItem
            isOnline={el.isOnline}
            name={el.name}
                avatar={el.avatar}
                key = {el.id}
        />)
            
        ))}
    </ul>);
}
FriendList.propTypes = {
 props : PropTypes.object
}