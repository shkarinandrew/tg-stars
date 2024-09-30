import * as Yup from 'yup';

export const validationSchema = (balance: number) =>
  Yup.object({
    details: Yup.string()
      .trim()
      .min(8, 'Длина номера должна быть больше 8 символов')
      .required('Введите номер карты или счета'),
    amount: Yup.string()
      .trim()
      .matches(/^\d+$/, 'Поле должно содержать только цифры')
      .test(
        'length',
        (value) => {
          const count = parseInt(value.value, 10);
          if (count <= 0) {
            return 'Сумма должна быть больше нуля';
          }

          if (count > balance) {
            return `Превышен лимит, вам доступно ${balance}$`;
          }
        },
        () => {
          return false;
        },
      )
      .required('Введите сумму вывода'),
  });
