import React,{Component} from "react";
import {
  Dimensions,
  Platform,
  AsyncStorage
} from "react-native";

// import { EventRegister } from 'react-native-event-listeners';
// import localizeTH from './../assets/localize/thai.json';

class CM extends Component{

    static screenWidth(){
        let {width} = Dimensions.get('window');
        return width;
    }
    
    static screenHeight(){
        let {height} = Dimensions.get('window');
        return height;
    }

  static point(value=0){
    let {width,height} = Dimensions.get('window');

    var ratio;
    let base_width = 375.0;
    let base_height = 667.0;
    let base_ratio = base_height/base_width;
    let current_ratio = height/width;

    if(Platform.OS === 'ios'){
      if(Platform.isPad){
        ratio = parseFloat(height/base_height);
      }else{
        ratio = parseFloat(width/base_width);
      }
    }else{
      if(current_ratio<base_ratio){
        ratio = parseFloat(height/base_height);
      }else{
        ratio = parseFloat(width/base_width);
      }
    }

    var new_value = value*ratio;
    return new_value;
  }

  static font(value=0){
    let {width,height} = Dimensions.get('window');

    var ratio;
    let base_width = 375.0;
    let base_height = 667.0;
    let base_ratio = base_height/base_width;
    let current_ratio = height/width;

    if(Platform.OS === 'ios'){
      if(Platform.isPad){
        ratio = parseFloat(height/base_height);
      }else{
        ratio = parseFloat(width/base_width);
      }
    }else{
      if(current_ratio<base_ratio){
        ratio = parseFloat(height/base_height);
      }else{
        ratio = parseFloat(width/base_width);
      }
    }

    var new_value = value*ratio;
    return new_value;
  }

  static getValue(data,key,default_value){
    
    if(default_value!=0){
      if(!default_value){
        default_value = "";
      }
    }

    try{
      var result =  data[key];
      if(!result){
        result = default_value;
      }
      return result;
    }catch(e){
      return default_value;
    }
  }
}
export default CM;
