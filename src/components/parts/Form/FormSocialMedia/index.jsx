import Button from '@components/elements/Button';
import Input from '@components/elements/Input/Input';
import Select from '@components/elements/Input/Select';
import { OPTIONS_ICON_SOCIAL_MEDIA } from '@constants/data';
import { isObjEmpty } from '@lib/check';
import fetchAPI from '@lib/fetchApi';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export default function FormSocialMedia({ initialData, existData }) {
  const [data, setData] = useState({
    label: initialData?.label ?? '',
    url: initialData?.url ?? '',
    icon: initialData?.icon ? OPTIONS_ICON_SOCIAL_MEDIA.filter((opt) => opt.value === initialData.icon)[0] : {},
  });

  const [error, setError] = useState({
    label: '',
    url: '',
    icon: '',
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isEdit = !!initialData;

  const isChange = initialData
    ? data.label === initialData.label && data.url === initialData.url && data.icon?.value === initialData.icon
    : null;

  const optionsIcon = OPTIONS_ICON_SOCIAL_MEDIA.filter(
    (option) => !existData.some((item) => item.icon === option.value && item.icon !== initialData?.icon)
  );

  const handleChangeIcon = (option) => {
    setData({ ...data, icon: option });
    setError({ ...error, icon: '' });
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const validateForm = () => {
    const { label, url, icon } = data;

    const errors = {};
    let isValid = true;

    if (!label) {
      errors.label = 'Label is required';
      isValid = false;
    } else if (label.length < 5 || label.length > 100) {
      errors.label = 'Label must be between 5 and 100 characters';
      isValid = false;
    }

    if (!url) {
      errors.url = 'URL is required';
      isValid = false;
    }

    if (isObjEmpty(icon)) {
      errors.icon = 'Icon is required';
      isValid = false;
    }

    setError({ ...error, ...errors });

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (validateForm()) {
      const endPoint = isEdit ? `/api/social-medias/${initialData._id}` : '/api/social-medias';
      const result = await fetchAPI(endPoint, {
        method: isEdit ? 'PUT' : 'POST',
        body: { ...data, icon: data.icon.value },
      });

      setLoading(false);

      if (result.success) {
        const message = isEdit ? 'Social media has been updated' : 'Social media has been created';
        toast.success(message);
        router.replace('/admin/social-medias');
      } else if (result.message === '"url" must be a valid uri') {
        setError({ ...error, url: 'URL is invalid' });
      } else {
        toast.error(result.message);
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form">
        <Input
          label="Label"
          id="label"
          value={data.label}
          required
          onChange={handleChangeInput}
          name="label"
          placeholder="Label social media"
          errorMessage={error.label}
        />
        <Input
          type="url"
          label="URL"
          id="url"
          value={data.url}
          required
          onChange={handleChangeInput}
          name="url"
          placeholder="URL social media"
          errorMessage={error.url}
        />
        <Select
          options={optionsIcon}
          label="Icon"
          placeholder="Icon social media"
          onClickOption={handleChangeIcon}
          errorMessage={error.icon}
          defaultValue={data.icon}
        />
      </div>

      <Button type="submit" className="mt-5" isLoading={loading} disabled={isChange}>
        {isEdit ? 'Edit' : 'Create'}
      </Button>
    </form>
  );
}

FormSocialMedia.defaultProps = {
  initialData: null,
};

FormSocialMedia.propTypes = {
  initialData: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.string,
  }),
  existData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
};
