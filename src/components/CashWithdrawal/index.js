import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onDeductedBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="cash-cont">
          <div className="name-cont">
            <div className="icon n-cont">
              <p>S</p>
            </div>
            <div className="n-cont">
              <h1 className="name">Sarah Williams</h1>
            </div>
          </div>
          <div className="bal-cont">
            <p className="h">Your balance</p>
            <div>
              <p className="d">{balance}</p>
              <p className="h">In Rupees</p>
            </div>
          </div>
          <p className="d">Withdraw</p>
          <p className="h">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denom">
            {denominationsList.map(eachlist => (
              <DenominationItem
                denominationItem={eachlist}
                key={eachlist.id}
                onDeductedBalance={this.onDeductedBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
