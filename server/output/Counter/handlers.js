import {count} from './states.js';
export const handleAddBtnClick = ($event) => { count.value += 1 }
export const handleShowCount = () => { console.log(count.value) }
