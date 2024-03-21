import { greenColor, whiteColor } from "./Colors.js";

export function SelectButtonOption(button, text){
    document.getElementById(button).style.borderColor = greenColor;
    document.getElementById(text).style.color = greenColor;
}
export function UnselectButtonOption(button, text){
    document.getElementById(button).style.borderColor = whiteColor;
    document.getElementById(text).style.color = whiteColor;
}
