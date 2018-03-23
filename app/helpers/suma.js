import { helper } from '@ember/component/helper';

export function suma(params/*, hash*/) {
  return params.reduce((a, b) => {
    return Number(a) + Number(b);
  });
}

export default helper(suma);
