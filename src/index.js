//index.js

import React from "react";
import ReactDOM from "react-dom";

import 'semantic-ui-css/semantic.min.css'
import './../assets/css/style.css'

import MedalWidget from '@components/MedalWidget'

export function initialize(element_id, sort = "gold", top = 10, debug = false) {
  console.log("Initializing Medal Widget for <div id=\"" + element_id + "\"> with Sort: " + sort);
  ReactDOM.render(
    <MedalWidget sort={sort} top={top} debug={debug}  />,
    document.getElementById(element_id)
  )
  console.log("Initializing Medal Widget for <div id=\"" + element_id + "\"> with Sort: " + sort + " complete.");
}
