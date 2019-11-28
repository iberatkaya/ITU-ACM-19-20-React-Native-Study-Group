import React from 'react';
import { ScrollView, View, Text, FlatList, Picker } from 'react-native';


export default class Home extends React.Component {

    //Projeyi github'tan clone'ladıktan sonra npm install diyerek kütüphaneleri indirmek gerekir

    constructor(props) {   //Component consturctor'ı
        super(props);
        this.state = {
            base: 'EUR',
            rates: []
        }
    }

    static navigationOptions = ({ navigation }) => (
        {
            title: 'Exchange',
            headerStyle: {
                elevation: 1,
                backgroundColor: 'rgb(200, 0, 0)',
            },
            headerTintColor: '#fff'
        }
    );

    getRates = async () => {
        let req = await fetch('https://api.exchangeratesapi.io/latest?base=' + this.state.base);    //API'a istek at ve geri dönüş al
        let jsObj = await req.json();     //Fetch'in döndürüğü response'daki JSON objesini bul, JS objesine çevir ve jsObj desğişkenine ata
        /*
          JSON.parse() vs .json()
          JSON.parse() parametre olarak aldığı JSON objesini JS objesine çevirir
          .json() ise Promise kullanan (async) fonksiyonlardan gelen response'u JS objesine çevir
          Bizim örneğimizde fetch diye bir async fonskiyon kullandığımız için .json() kullanmamız gerekir
        */
        let rates = [];
  //      console.log(jsObj);
        for (let key in jsObj.rates) {
            let temp = { name: key, rate: jsObj.rates[key] };
            //          console.log(key + ' ' + jsObj.rates[key]);
            rates.push(temp);
        }
//        console.log(rates);
        this.setState({
            rates: rates
        });
    }

    async componentDidMount() {    //Component mountlandıktan sonra bu fonksiyonu execute et
        await this.getRates();    
    }

    labels = () => {
        let i = 0;
        if(this.state.rates.length == 0)
            return <Picker.Item label="EUR" value={this.state.base} key={0}/>;
        return this.state.rates.map(item => {
            return(<Picker.Item label={item.name} value={item.name} color="black" key={i++}/>)
        });
    }

    render() {   //Ekranda görülecek her şey render'da gerçekleşir
        let a = this.labels();
        return (
            <ScrollView>
                <Picker
                    mode="dropdown"
                    selectedValue={this.state.base}
                    style={{height: 50, width: 150}}
                    onValueChange={(value, itemIndex) => {
                        this.setState({base: value}, async () => {
                            await this.getRates();
                        })
                        
                    }
                }>
                    {
                        a
                    }
                </Picker>
                <FlatList
                    data={this.state.rates}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                  //      console.log(item);
                        return (
                            <View>
                                <Text 
                                    onPress={() => {
                                        this.props.navigation.navigate("Exchange", {base: item.name, rate: item.rate})}
                                    } 
                                    style = {{fontSize: 22}}>{item.name}: {item.rate}</Text>
                            </View>);
                    }}
                />
            </ScrollView>
        );
    }
};

