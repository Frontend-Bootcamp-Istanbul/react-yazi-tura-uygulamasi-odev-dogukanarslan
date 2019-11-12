import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props){
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
        side: "tura",
        donuyor: false,
        flips: 0,
        yazi: 0,
        tura: 0
    }
  }

  sifirla = () => {
    this.setState({flips: 0});
    this.setState({yazi: 0});
    this.setState({tura: 0})
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    this.setState({donuyor: true});
    // "At!" butonuna tıklandığında toplam atış sayısını bir arttırıyor
    this.setState({flips: this.state.flips+1});
    let flippedCoin = Math.floor(Math.random()*2);
    if (flippedCoin === 0){
      this.setState({side: "yazi"})
    } else if (flippedCoin === 1){
      this.setState({side: "tura"})
    }
    if (flippedCoin === 0){
      this.setState({yazi: this.state.yazi + 1})
    } else if(flippedCoin === 1){
      this.setState({tura: this.state.tura + 1})
    }
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({donuyor: false}), 1000);
  };

  render(){
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor}/>
        <button onClick={this.handleClick} >At!</button><br/>
        <button onClick={this.sifirla}>Sıfırla</button>
        <p>
            Toplam
            <strong> {this.state.flips} </strong>
            atıştan
            <strong> {this.state.tura} </strong>
             tura
            <strong> {this.state.yazi} </strong>
             yazı geldi.</p>
      </div>
    )
  }
}

export default CoinFlipper;
