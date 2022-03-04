import Button from '@components/elements/Button';
import Input from '@components/elements/Input/Input';
import Title from '@components/elements/Title';
import fetchAPI from '@lib/fetchApi';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { isEmail } from '@lib/check';

export default function FormRegister() {
  const [data, setData] = useState({
    fullNameRegister: '',
    emailRegister: '',
    passwordRegister: '',
    confirmPasswordRegister: '',
  });

  const [error, setError] = useState({
    fullNameRegister: '',
    emailRegister: '',
    passwordRegister: '',
    confirmPasswordRegister: '',
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const validateForm = () => {
    const { fullNameRegister, emailRegister, passwordRegister, confirmPasswordRegister } = data;
    const errors = {};
    let isValid = true;

    if (!fullNameRegister) {
      errors.fullNameRegister = 'Full name is required';
      isValid = false;
    }

    if (!emailRegister) {
      errors.emailRegister = 'Email is required';
      isValid = false;
    } else if (!isEmail(emailRegister)) {
      errors.emailRegister = 'Email is invalid';
      isValid = false;
    }

    if (!passwordRegister) {
      errors.passwordRegister = 'Password is required';
      isValid = false;
    } else if (passwordRegister.length < 8) {
      errors.passwordRegister = 'Password must be at least 8 characters';
      isValid = false;
    }

    if (!confirmPasswordRegister) {
      errors.confirmPasswordRegister = 'Confirm password is required';
      isValid = false;
    }

    if (passwordRegister !== confirmPasswordRegister) {
      errors.confirmPasswordRegister = 'Confirm password is not match';
      isValid = false;
    }

    setError({ ...error, ...errors });

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (validateForm()) {
      const result = await fetchAPI('/api/users', {
        method: 'POST',
        body: {
          name: data.fullNameRegister,
          email: data.emailRegister,
          password: data.passwordRegister,
          confirmPassword: data.confirmPasswordRegister,
        },
      });

      setLoading(false);

      if (result.success) {
        toast.success('Register success');
        router.replace('/admin/auth/login');
      } else {
        toast.error(result.message);
      }
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen center-flex py-5">
      <div>
        <Title className="heading-3">Register</Title>

        <form onSubmit={handleSubmit} className="mt-6" noValidate>
          <div className="form">
            <Input
              label="Full Name"
              id="fullNameRegister"
              value={data.fullNameRegister}
              required
              onChange={handleChangeInput}
              name="fullNameRegister"
              placeholder="Full name"
              errorMessage={error.fullNameRegister}
            />
            <Input
              type="email"
              label="Email"
              id="emailRegister"
              value={data.emailRegister}
              required
              onChange={handleChangeInput}
              name="emailRegister"
              placeholder="Email"
              errorMessage={error.emailRegister}
            />
            <Input
              type="password"
              label="Password"
              id="passwordRegister"
              value={data.passwordRegister}
              required
              onChange={handleChangeInput}
              name="passwordRegister"
              placeholder="Password"
              errorMessage={error.passwordRegister}
            />
            <Input
              type="password"
              label="Confirm Password"
              id="confirmPasswordRegister"
              value={data.confirmPasswordRegister}
              required
              onChange={handleChangeInput}
              name="confirmPasswordRegister"
              placeholder="Confirm password"
              errorMessage={error.confirmPasswordRegister}
            />
          </div>

          <Button type="submit" className="mt-5" isLoading={loading}>
            Register
          </Button>
        </form>
      </div>
    </section>
  );
}
