import { ITextInputProps } from '..';
import { Text, TextVariants } from '../..';
import { composeRequiredInput } from '../../../../utils';
import { TextInput as TextInputStyles } from './styles';

export const TextInput = (props: ITextInputProps) => {
  const { register, name, required, validate, error, className, ...rest } =
    props;

  const renderError = () => {
    if (!error) return;

    return (
      <Text italic variant={TextVariants.REGULAR_ONE} className="error">
        {error[name]?.message || error.error}
      </Text>
    );
  };

  return (
    <TextInputStyles className={className} error={error}>
      <input
        type="text"
        {...register(name, {
          required: composeRequiredInput(required),
          validate: validate,
        })}
        {...rest}
      />
      {renderError()}
    </TextInputStyles>
  );
};
