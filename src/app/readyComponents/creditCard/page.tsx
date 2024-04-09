'use client'
import styles from '@/app/readyComponents/creditCard/page.module.css'
import Image from 'next/image'
import { spaceGrotesk } from '@/app/ui/fonts'
import SuccessPopup from '@/app/readyComponents/creditCard/successPopup'
import Form from '@/app/readyComponents/creditCard/form'
import { ChangeEvent, useState, useRef } from 'react'
import formatInput from '@/app/utils/helpers/formatInput'
import validateData from '@/app/utils/helpers/validateForm'

export default function CreditCard() {
  const emptyDataObj = {
    name: '',
    number: '',
    year: '',
    month: '',
    cvv: '',
  }

  const defaultDataObj = {
    name: 'John Doe',
    number: '0000 0000 0000 0000',
    cvv: '000',
    month: '00',
    year: '00',
  }

  const [data, setData] = useState(defaultDataObj);
  const [formValue, setFormValue] = useState(emptyDataObj)
  const [errors, setErrors] = useState(emptyDataObj);
  const [isValid, setIsValid] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function returnToForm() {
    setIsValid(false);
    setFormValue(emptyDataObj);
    setData(defaultDataObj);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const cursorPosition = inputRef.current?.selectionStart;

    switch (e.target.name) {
      case 'number':
        const updatedNumber = value.length < 16 ? formatInput(value, 16) : value;
        const formattedUpdatedNumber = updatedNumber.replace(/(\d{4})/g, '$1 ');

        setData({
          ...data,
          number: formattedUpdatedNumber
        });

        setFormValue({
          ...formValue,
          number: value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
        })
        break;
      case 'month':
      case 'year':
        const updatedDate = value.length < 2 ? formatInput(value, 2) : value;
        
        setData({
          ...data,
          [e.target.name]: updatedDate
        });
        setFormValue({
          ...formValue,
          [e.target.name]: value
        })
        break;
      case 'cvv':
        const updatedCvv = value.length < 2 ? formatInput(value, 3) : value;
        
        setData({
          ...data,
          cvv: updatedCvv
        });
        setFormValue({
          ...formValue,
          cvv: value
        })
        break;    
      default:
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
        setFormValue({
          ...formValue,
          [e.target.name]: e.target.value
        });
        break;
    }

    if (cursorPosition !== null) {
      const formattedValueBeforeCursor = formValue[e.target.name as keyof typeof formValue].substring(0, cursorPosition);
      const numberOfSpacesBeforeCursor = (formattedValueBeforeCursor.match(/ /g) || []).length;
      const newCursorPosition = cursorPosition! + numberOfSpacesBeforeCursor;
      inputRef.current!.setSelectionRange(newCursorPosition, newCursorPosition);
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    
    const errorsObj = await validateData(formValue);
    const noErrors = Object.entries(errorsObj).every((keyValuePair) => {
      return keyValuePair[1] === '';
    });

    if(noErrors) {
      setIsValid(true);
      setErrors(emptyDataObj)
    } else {
      setErrors(errorsObj);
    }
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
        {isValid 
          ? <SuccessPopup handleClick={returnToForm}/>
          : <Form 
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              formValue={formValue}
              inputRef={inputRef}
            />
        }
      </div>
    </div>
  )
}