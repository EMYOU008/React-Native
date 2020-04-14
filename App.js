import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends Component{

  constructor() {
    super();
    this.state = {
      resultText:"",
      calculationText:""
    }
    this.operations = ['D','+','-','*','/']

  }
// ##################################Calculation Result ################
  calculateResult(){
    const text= this.state.resultText
    // Must read about the eval function
    console.log(text, eval(text))
    this.setState({
      calculationText: eval(text)

    })

  //  now parse this text 3+3*6^5/2+7


  }
// ################################Button Presss ###################
  validate(){
    const text =this.state.resultText
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
        return false

    }
    return true
  }
  buttonPressed(text){

    //console.log(text)

    if(text =='='){
      return this.validate() && this.calculateResult()
    }
    this.setState({
      resultText:this.state.resultText+text
    })


  }

  operate(operations){

    switch(operations){

      case 'D':
        console.log(this.state.resultText)
        let text =this.state.resultText.split('')
            text.pop()
            text.join('')
            this.setState({
              resultText:text.join('')
            })
            break
      case'+':
      case'-':
      case'*':
      case'/':
        const lastChar =  this.state.resultText.split('').pop()
          if(this.operations.indexOf(lastChar) > 0) return;
        if(this.state.text == "" ) return
            this.setState({
              resultText: this.state.resultText + operations
            })



    }


  }
  render() {
    let rows= [];
    let nums=[[1,2,3],[4,5,6],[7,8,9],[".",0,"="]]
    for(let i=0; i<4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
            <TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={style.btn}>
          <Text style={style.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>);
      }
      rows.push(<View style={style.row}>{row}</View>)
    }

    let ops =[]
    for(let i=0; i<5; i++){
      ops.push(
          <TouchableOpacity style={style.btn} onPress={() => this.operate(this.operations[i]) }>
        <Text style={[style.btntext,style.white]}>{this.operations[i]}</Text>
      </TouchableOpacity>);
    }

    return(
        <View style={style.container}>
          <View style={style.result}>
            <Text style={style.resultText}>{this.state.resultText}</Text>
          </View>
          <View style={style.calculation}>
            <Text style={style.calculationText}>{this.state.calculationText}</Text>

          </View>
          <View style={style.buttons}>
            <View style={style.numbers}>
              {rows}
            </View>

            <View style={style.operations}>
              {ops}
            </View>

          </View>
        </View>
    );
  }
}

const style = StyleSheet.create({
  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },
  white:{
     color:'red',
      fontSize:30,
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  btntext:{
    fontSize:30,
    color:'white'
  },
  container:{
    flex: 1
  },
  resultText:{
    fontSize: 35,
    color:'white'

  },

  calculationText:{

    fontSize:24,
    color:'white'
  },

  row:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result:{
    flex: 2,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'flex-end',

  },
  calculation:{
    flex: 1,
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems:'flex-end',
    borderBottomWidth:1,
    borderBottomColor:"white"

  },
  buttons:{
    flex:7,
    flexDirection: 'row'
  },
  numbers:{
    flex:3,
    backgroundColor:'black',

  },
  operations:{
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'black',
    borderWidth: 1,
    borderLeftColor:'white'
  }

});

