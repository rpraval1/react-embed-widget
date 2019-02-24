//index.js

import React from "react";
import ReactDOM from "react-dom";

import 'semantic-ui-css/semantic.min.css'
import './../public/assets/css/style.css'

import MedalWidget from '@components/MedalWidget'

export function initialize(element_id, sort, top = 10) {
  console.log("Initializing Medal Widget for <div> ID: " + element_id + " with Sort: " + sort);
  ReactDOM.render(
    <MedalWidget sort={sort} top={top}  />,
    document.getElementById(element_id)
  )
  console.log("Initializing Medal Widget for <div> ID: " + element_id + " with Sort: " + sort + " complete.");
}
