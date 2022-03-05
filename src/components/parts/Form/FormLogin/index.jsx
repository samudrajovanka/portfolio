import Button from '@components/elements/Button';
import Input from '@components/elements/Input/Input';
import Title from '@components/elements/Title';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { isEmail } from '@lib/check';

export default function FormLogin() {
  const [data, setData] = useState({
    emailLogin: '',
    passwordLogin: '',
  });

  const [error, setError] = useState({
    emailLogin: '',
    passwordLogin: '',
    login: '',
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const validateForm = () => {
    const { emailLogin, passwordLogin } = data;
    const errors = {};
    let isValid = true;

    if (!emailLogin) {
      errors.emailLogin = 'Email is required';
      isValid = false;
    } else if (!isEmail(emailLogin)) {
      errors.emailLogin = 'Email is invalid';
      isValid = false;
    }

    if (!passwordLogin) {
      errors.passwordLogin = 'Password is required';
      isValid = false;
    }

    setError({ ...error, ...errors });

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (validateForm()) {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.emailLogin,
        password: data.passwordLogin,
      });

      setLoading(false);
      if (!result.error) {
        router.replace('/admin');
      } else if (result.error === '"email" must be a valid email') {
        setError({ ...error, emailLogin: 'Email is not valid' });
      } else {
        setError({ ...error, login: result.error });
      }
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen center-flex py-5">
      <div>
        <Title className="heading-3">Login</Title>

        <form onSubmit={handleSubmit} className="mt-6" noValidate>
          {error.login && <p className="small-text text-red-500 mb-3">{error.login}</p>}
          <div className="form">
            <Input
              type="email"
              label="Email"
              id="emailLogin"
              value={data.emailLogin}
              required
              onChange={handleChangeInput}
              name="emailLogin"
              placeholder="Email"
              errorMessage={error.emailLogin}
            />
            <Input
              type="password"
              label="Password"
              id="passwordLogin"
              value={data.passwordLogin}
              required
              onChange={handleChangeInput}
              name="passwordLogin"
              placeholder="Password"
              errorMessage={error.passwordLogin}
            />
          </div>

          <Button type="submit" className="mt-5" isLoading={loading}>
            Login
          </Button>
        </form>
      </div>
    </section>
  );
}
