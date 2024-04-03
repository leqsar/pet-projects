'use server'

export default async function validateData(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    number: formData.get('number'),
    month: formData.get('month'),
    year: formData.get('year'),
    cvv: formData.get('cvv'),
  }

  // mutate data
  // revalidate cache
}