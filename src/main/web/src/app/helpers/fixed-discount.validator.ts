import {FormGroup} from '@angular/forms';

export function FixedDiscount() {
  return (formGroup: FormGroup) => {
    const valueControl = (formGroup.controls.discount as FormGroup).controls.amount;
    const discountTypeControl = (formGroup.controls.discount as FormGroup).controls.type;
    const priceControl = formGroup.controls.price;

    if (valueControl.errors && !valueControl.errors.invalidDiscount) {
      return;
    }

    if (discountTypeControl.value === 'Fixed discount' && valueControl.value >= priceControl.value) {
      valueControl.setErrors({invalidDiscount: true});
    } else {
      valueControl.setErrors(null);
    }
  };
}
