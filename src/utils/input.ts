import { ValidationRule } from 'react-hook-form';

export const composeRequiredInput = (
  required: boolean | string | undefined,
): string | ValidationRule<boolean> | undefined => {
  if (!required)
    return {
      value: false,
      message: '',
    };

  const composeMessage =
    typeof required === 'boolean' ? 'This is a mandatory field' : required;

  return {
    value: true,
    message: composeMessage,
  };
};

interface FormConfig {
  mode: 'onBlur' | 'onChange' | 'onSubmit' | 'all';
}

export const FORM_CONFIG: FormConfig = {
  mode: 'onBlur',
};

export const Validations = {
  URL: function (userInput: string) {
    const regexp =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;

    if (!regexp.test(userInput)) return 'Oops! Looks like the URL isnt valid.';
    return true;
  },
};
