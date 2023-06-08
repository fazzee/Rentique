// import {FieldErrors, FieldValues} from 'react-hook-form';
import {TextProps, TextInputProps, ViewProps, ImageProps, TouchableOpacityProps} from "react-native";
// import {TextInputProps} from "react-native-paper";
// import {SlideShowProperties} from "react-native-timed-slideshow";

declare module "react-native" {
  interface TextProps {
    className?: string;
    errors?: string;
    name?: string;
    phone?: string;
    message?: string;
  }
  interface TextInputProps {
    className?: string;
    type?: string;
    mask?: string;
    label?: string;
    activeUnderlineColor?: string;
    textColor?: string;
    underlineStyle?: object;
  }
  interface ViewProps {
    className?: string;
  }
  interface ImageProps {
    className?: string;
  }
  interface TouchableOpacityProps {
    className?: string;
  }
  // interface FieldErrors {
  //   errors?: object;
  // }
  // interface FieldValues {
  //   errors?: object;
  //   name?: string;
  //   phone?: string;
  //   message?: string;
  //   type?: string;
  //   mask?: string;
  //   label?: string;
  //   activeUnderlineColor?: string;
  // }
  interface IntrinsicClassAttributes<T> {
    className?: string;
    errors?: string;
    name?: string;
    phone?: string;
    message?: string;
    type?: string;
    mask?: string;
    label?: string;
    activeUnderlineColor?: string;
    textColor?: string;
    underlineStyle?: object;
  }
  // interface SlideShowProperties {
  //   className?: string;
  //   items: object[];
  //   showProgressBar?: boolean;
  //   renderFooter?: IntrinsicClassAttributes<TimedSlideshow>;
  // }
}
