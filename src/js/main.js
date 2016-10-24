import $ from "jquery";
import {musiccloud} from "./soundcloud.js";
import {extractInfo} from "./template.js";
// import {logData} from "./soundcloud.js"



musiccloud.then(extractInfo);

