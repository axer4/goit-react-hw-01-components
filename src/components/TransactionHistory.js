import styles from '../styles/TransactionHistory.css';
import PropTypes from 'prop-types' 
export default function TransactionHistory(props) {
    console.log(props)
  return (<table className={styles.transaction}>
  <thead >
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </thead>
        {props.items.map(el => (
            <tbody key = {el.id}>
    <tr>
                    <td>{ el.type}</td>
                    <td>{el.amount}</td>
                    <td>{el.currency}</td>
    </tr>
  </tbody>
        ))}
</table>)
}
TransactionHistory.propTypes = {
  props : PropTypes.object
}