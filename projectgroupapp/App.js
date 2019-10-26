import React from 'react';
import { View, Text } from 'react-native';


export default class App extends React.Component {

  //Projeyi github'tan clone'ladıktan sonra npm install diyerek kütüphaneleri indirmek gerekir

  constructor(props){   //Component consturctor'ı
    super(props);
    this.state = {
      eurotodolar: 'Data is loading',
      eurototl: ''
    }
  }

  async componentDidMount(){    //Component mountlandıktan sonra bu fonksiyonu execute et
    let jsonObj = await fetch('https://api.exchangeratesapi.io/latest');    //API'a istek at ve geri dönüş al
    let jsObj = await jsonObj.json();     //Fetch'in döndürüğü response'daki JSON objesini bul, JS objesine çevir ve jsObj desğişkenine ata
    /*
      JSON.parse() vs .json()
      JSON.parse() parametre olarak aldığı JSON objesini JS objesine çevirir
      .json() ise Promise kullanan (async) fonksiyonlardan gelen response'u JS objesine çevir
      Bizim örneğimizde fetch diye bir async fonskiyon kullandığımız için .json() kullanmamız gerekir
    */
    console.log('1 ' + jsObj.base + ' = ' + jsObj.rates.USD + ' USD')   //Console'a 1 Euro'nun kaç Dolar olduğunu yaz
    this.setState({
      eurotodolar: '1 ' + jsObj.base + ' = ' + jsObj.rates.USD + ' USD',
      eurototl: '1 ' + jsObj.base + ' = ' + jsObj.rates.TRY + ' TL'
    });
  }

  render(){   //Ekranda görülecek her şey render'da gerçekleşir
    return (
      <View style = {{alignItems: 'center', marginTop: 24}}>
        {/*State'te tanımlı text değişkenindeki stringi yaz*/}
        <Text style = {{fontSize: 18}}>{this.state.eurotodolar + '\n' + this.state.eurototl}</Text>    
      </View>
      );
    }
};

