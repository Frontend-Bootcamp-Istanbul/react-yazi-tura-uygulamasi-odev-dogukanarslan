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
    this.setState({flips: 0, yazi: 0, tura: 0});
  }

  handleClick = () => {
    let flippedCoin = Math.floor(Math.random()*2);
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    // Aynı zamanda toplam atılma sayısını bir arttırıyor
    this.setState({donuyor: true, flips: this.state.flips+1});
    //Butona basıldıktan sonra paranın durmasını bekliyor ve sonra yazı ya da tura geldiğini ekrana basıyor
    setTimeout(() => flippedCoin === 0 ? this.setState({side: "yazi",yazi: this.state.yazi+1}) :
    this.setState({side: "tura", tura: this.state.tura+1}),1000)
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({donuyor: false}), 1000);
  };
  render(){
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor}/>
        {this.state.donuyor === false ? <button onClick={this.handleClick}>At!</button>:<button disabled onClick={this.handleClick} >Atılıyor...</button>}<br/>
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
