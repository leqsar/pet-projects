import z from 'zod'
import { ZodIssue } from 'zod';
import { DataType,  ErrorsObj} from '@/app/utils/types';

export default async function validateData(formData: DataType): Promise<ErrorsObj> {
  const card = z.object({
    name: z.string().min(1, 'Can`t be empty'),
    number: z.string().min(1, 'Can`t be empty').regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Should be in 1111 1111 1111 1111 format'),
    month: z.number().gte(1, {message: 'Number 1-12'}).lte(12, {message: 'Number 1-12'}),
    year: z.number().min(2, 'Can`t be empty'),
    cvv: z.number().min(3, 'Can`t be empty'),
  });

  const requiredCard = card.required();

  const parse = await requiredCard.safeParse({
    name: formData.name,
    number: formData.number,
    month: Number(formData.month),
    year: Number(formData.year),
    cvv: Number(formData.cvv),
  });

  const errors = {
    name: '',
    number: '',
    year: '',
    month: '',
    cvv: '',
  };

  if (!parse.success) {
    const fieldErrors = parse.error.flatten((issue: ZodIssue) => ({
      message: issue.message,
      errorCode: issue.code,
    })).fieldErrors;

    for (const property in errors) {
      const { message, errorCode} = fieldErrors[property as keyof typeof errors]
        ? fieldErrors[property as keyof typeof errors]![0]
        : {message: '', errorCode: null};

      errors[property as keyof typeof errors] = errorCode === 'invalid_type'
        ? 'Letters are not allowed'
        : message;
    }
  }

  return errors;
}