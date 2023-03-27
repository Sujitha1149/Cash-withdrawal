import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {denominationItem, onDeductedBalance} = this.props
    function onValClick() {
      onDeductedBalance(denominationItem.value)
    }
    return (
      <li className="denom-cont">
        <button type="button" className="denom-item" onClick={onValClick}>
          {denominationItem.value}
        </button>
      </li>
    )
  }
}
export default DenominationItem
