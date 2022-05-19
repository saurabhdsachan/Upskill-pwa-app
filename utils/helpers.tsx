function debounce(func, wait) {
  let timeout;

  return function x(...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(this, args);
    }, wait);
  };
}
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function currencyFormat(price) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

interface IImageOptions {
  height?: number;
  width?: number;
  format?: 'jpeg';
  quality?: number;
}

const getImageUrl = (formattedUrl: string | null, options: IImageOptions): undefined | string => {
  if (typeof formattedUrl !== 'string') {
    return undefined;
  }

  // return '/imgs/userAvatar.jpeg';

  return formattedUrl
    .split('{height}')
    .join(`h${options.height * 2 || 0}`)
    .split('{width}')
    .join(`w${options.width * 2 || 0}`)
    .split('{format}')
    .join(`${options.format || 'jpeg'}`)
    .split('{quality}')
    .join(`q${options.quality || 100}`);
};

export { debounce, arraysEqual, currencyFormat, classNames, getImageUrl };
