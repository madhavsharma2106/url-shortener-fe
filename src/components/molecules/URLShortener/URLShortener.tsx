import {
  Button,
  ButtonSizes,
  ButtonTypes,
  ButtonVariants,
  Input,
  InputVariants,
} from '../../atoms';
import { URLShortener as URLShortenerStyles } from './styles';
import { FormValues, IURLShortenerProps } from './types';
import { useForm } from 'react-hook-form';
import { Validations } from '../../../utils';

export const URLShortener = (props: IURLShortenerProps) => {
  const { shorten, loading, error, ...rest } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    shorten(values.urlShortener);
  };

  return (
    <URLShortenerStyles {...rest}>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            variant={InputVariants.TEXT}
            register={register}
            placeholder="Shorten a link here..."
            name="urlShortener"
            className="shorten-input"
            required="Please add a link"
            error={error || errors}
            validate={Validations.URL}
          />
          <Button
            variant={ButtonVariants.PRIMARY}
            size={ButtonSizes.LARGE}
            buttonType={ButtonTypes.REGULAR}
            loading={loading}
            type="submit"
          >
            Shorten it!
          </Button>
        </form>
      </section>
    </URLShortenerStyles>
  );
};
