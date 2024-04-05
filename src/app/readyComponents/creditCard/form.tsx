'use client'
import button from '@/app/readyComponents/creditCard/button.module.css'
import styles from '@/app/readyComponents/creditCard/page.module.css'
import { ChangeEventHandler } from 'react'
import Error from '@/app/readyComponents/creditCard/error'
import { FormEventHandler } from 'react'
import { DataType, ErrorsObj} from '@/app/utils/types';

interface Props {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  errors: ErrorsObj;
  formValue: DataType;
}

export default function Form({ handleChange, handleSubmit, errors, formValue }: Props) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="name">cardholder name</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={formValue.name}
          placeholder='e.g. John Doe'
          onChange={handleChange}
          className={styles.nameInput}
          />
          {errors.name ? <Error message={errors.name}/> : null}
      </div>
      <div>
        <label htmlFor="number">card number</label>
        <input 
          type="text"
          id="number"
          name="number"
          value={formValue.number}
          placeholder='e.g 1234 1233 1234 1234'
          onChange={handleChange}
          maxLength={16}
        />
        {errors.number ? <Error message=''/> : null}
      </div>
      <div className={styles.additionalInfoForm}>
        <div className={styles.dateForm}>
          <label htmlFor="month">exp.date (mm/yy)</label>
          <input
            type="text"
            id="month"
            name="month"
            value={formValue.month}
            placeholder='MM'
            onChange={handleChange}
            maxLength={2}
            minLength={2}
          />
          <input
            type="text"
            id="year"
            name="year"
            value={formValue.year}
            placeholder='YY'
            onChange={handleChange}
            minLength={2}
            maxLength={2}
          />
          {errors.year || errors.month ? <Error message=''/> : null}
        </div>
        <div className={styles.cvvForm}>
          <label htmlFor="cvv">cvv</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formValue.cvv}
            placeholder='e.g. 123'
            onChange={handleChange}
            maxLength={3}
            minLength={3}
          />
          {errors.cvv ? <Error message=''/> : null}
        </div>
      </div>
      <button type='submit' className={button.button}>Confirm</button>
    </form>
  )
}