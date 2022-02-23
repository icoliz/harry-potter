import imgPlaceholder1 from '../images/gifs/hp_1.gif';
import imgPlaceholder2 from '../images/gifs/hp_2.gif';
import imgPlaceholder3 from '../images/gifs/hp_3.gif';
import imgPlaceholder4 from '../images/gifs/hp_4.gif';
import imgPlaceholder5 from '../images/gifs/hp_5.gif';
import imgPlaceholder6 from '../images/gifs/hp_6.gif';
import imgPlaceholder7 from '../images/gifs/hp_7.gif';
import imgPlaceholder8 from '../images/gifs/hp_8.gif';

function getImgPlaceholder(index) {
  let placeholder;

  if (index % 8 === 0) {
    placeholder = imgPlaceholder8;
    return placeholder;
  } else if (index % 7 === 0) {
    placeholder = imgPlaceholder7;
    return placeholder;
  } else if (index % 6 === 0) {
    placeholder = imgPlaceholder6;
    return placeholder;
  } else if (index % 5 === 0) {
    placeholder = imgPlaceholder5;
    return placeholder;
  } else if (index % 4 === 0) {
    placeholder = imgPlaceholder4;
    return placeholder;
  } else if (index % 3 === 0) {
    placeholder = imgPlaceholder3;
    return placeholder;
  } else if (index % 2 === 0) {
    placeholder = imgPlaceholder2;
    return placeholder;
  } else {
    placeholder = imgPlaceholder1;
    return placeholder;
  }
}

export default getImgPlaceholder;
