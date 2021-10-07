import FriendList from "./components/FriendList";
import FriendsListItem from "./components/FriendListItem";
import friends from './friends.json';
import users from './user.json';
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import stats from './statistical-data.json';
import TransactionHistory from "./components/TransactionHistory";
import items from './transactions.json';

export default function App() {
    return (
        <>
            <Profile
                name={users.name}
                tag={users.tag}
                location={users.location}
                avatar={users.avatar}
                stats={users.stats}
            />
            <Statistics
                title= "Upload stats"
                stats={stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={items }/>
        </>
    )
}
    
// }
// export default function App() {
//     return (
//         <FriendList friends={friends} />

//     )
// }