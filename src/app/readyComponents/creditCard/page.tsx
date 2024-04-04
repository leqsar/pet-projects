'use client'
import styles from '@/app/readyComponents/creditCard/page.module.css'
import Image from 'next/image'
import { spaceGrotesk } from '@/app/ui/fonts'
import SuccessPopup from '@/app/readyComponents/creditCard/successPopup'
import Form from '@/app/readyComponents/creditCard/form'
import { useState } from 'react'
import { ChangeEvent } from 'react'
import formatInput from '@/app/utils/helpers/formatInput'
import validateData from '@/app/readyComponents/creditCard/validateForm'

export default function CreditCard() {
  const [data, setData] = useState({
    name: 'John Doe',
    number: '0000 0000 0000 0000',
    cvv: '000',
    month: '00',
    year: '00',
  });

  const [errors, setErrors] = useState({
    name: '',
    number: '',
    year: '',
    month: '',
    cvv: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    switch (e.target.name) {
      case 'number':
        const updatedNumber = value.length < 16 ? formatInput(value, 16) : value;
        const formattedUpdatedNumber = updatedNumber.replace(/(\d{4})/g, '$1 ');
        setData({
          ...data,
          number: formattedUpdatedNumber
        });
        break;
      case 'month':
      case 'year':
        const updatedDate = value.length < 2 ? formatInput(value, 2) : value;

        setData({
          ...data,
          [e.target.name]: updatedDate
        });
        break;
      case 'cvv':
        const updatedCvv = value.length < 2 ? formatInput(value, 3) : value;

        setData({
          ...data,
          cvv: updatedCvv
        });
        break;    
      default:
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
        break;
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    console.log('aaaaaa')
    event.preventDefault();
    const errorsObj = await validateData(data);
    setErrors(errorsObj);
  }

  return (
    <div className={`${styles.page} ${spaceGrotesk.className}`}>
      <div className={styles.cardWrapper}>
        <Image
          src='/bg-main-desktop.png'
          className={styles.mainBackground}
          fill={true}
          alt='Background gradient'
        />
        <div className={styles.frontSide}>
          <Image
            src='/bg-card-front.png'
            fill={true}
            alt='Credit card background'
          />
          <div className={styles.cardInfo}>
            <div className={styles.decorations}>
              <div className={styles.bigCircle}></div>
              <div className={styles.circle}></div>
            </div>
            <p className={styles.number}>{data.number}</p>
            <div className={styles.additionalInfo}>
              <p className={styles.ownerName}>{data.name}</p>
              <p className={styles.expirationDate}>{data.month}\{data.year}</p>
            </div>
          </div>
        </div>
        <div className={styles.backSide}>
          <Image
            src='/bg-card-back.png'
            fill={true}
            alt='Credit card background'
          />
          <p className={styles.cvv}>{data.cvv}</p>
        </div>
      </div>
      <div className={styles.formWrapper}>
        <Form handleClick={handleChange} handleSubmit={handleSubmit} errors={errors}/>
        {/* <SuccessPopup /> */}
      </div>
    </div>
  )
}