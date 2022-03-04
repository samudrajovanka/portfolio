import Button from '@components/elements/Button';
import Input from '@components/elements/Input/Input';
import TagLabel from '@components/elements/TagLabel';
import fetchAPI from '@lib/fetchApi';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export default function FormProject({ initialData }) {
  const [data, setData] = useState({
    name: initialData?.name ?? '',
    url: initialData?.url ?? '',
    stack: '',
    stacks: initialData?.stacks ?? [],
  });

  const [error, setError] = useState({
    name: '',
    url: '',
    stacks: '',
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isEdit = !!initialData;

  const isChange = initialData
    ? data.name === initialData.name &&
      data.url === initialData.url &&
      data.stack === initialData.stack &&
      data.stacks === initialData.stacks
    : null;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const handleChangeInputStacks = (e) => {
    if (e.nativeEvent.data === ',') {
      const { value } = e.target;
      const indexComma = value.indexOf(',');
      const stack = value.slice(0, indexComma);
      setData({ ...data, stack: '', stacks: [...data.stacks, stack] });
      setError({ ...error, stacks: '' });
    } else {
      const { value } = e.target;
      setData({ ...data, stack: value });
      setError({ ...error, stacks: '' });
    }
  };

  const handleDeleteStack = (index) => {
    const newStacks = data.stacks.filter((_, _index) => _index !== index);
    setData({ ...data, stacks: newStacks });
  };

  const validateForm = () => {
    const { name, url, stacks } = data;

    const errors = {};
    let isValid = true;

    if (!name) {
      errors.name = 'Name is required';
      isValid = false;
    } else if (name.length < 5 || name.length > 100) {
      errors.name = 'Name must be between 5 and 100 characters';
      isValid = false;
    }

    if (!url) {
      errors.url = 'URL is required';
      isValid = false;
    }

    if (stacks.length === 0) {
      errors.stacks = 'Stacks must be at least 1';
      isValid = false;
    }

    setError(errors);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (validateForm()) {
      const endPoint = isEdit ? `/api/projects/${initialData._id}` : '/api/projects';
      const result = await fetchAPI(endPoint, {
        method: 'POST',
        body: {
          name: data.name,
          url: data.url,
          stacks: data.stacks,
        },
      });

      setLoading(false);

      if (result.success) {
        const message = isEdit ? 'Project updated successfully' : 'Project created successfully';
        toast.success(message);
        router.replace('/admin/projects');
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
          label="Name"
          id="name"
          value={data.name}
          required
          onChange={handleChangeInput}
          name="name"
          placeholder="Name project"
          errorMessage={error.name}
        />
        <Input
          type="url"
          label="URL"
          id="url"
          value={data.url}
          required
          onChange={handleChangeInput}
          name="url"
          placeholder="URL project"
          errorMessage={error.url}
        />
        <div>
          <Input
            label="Stacks"
            id="stack"
            value={data.stack}
            required
            onChange={handleChangeInputStacks}
            name="stack"
            placeholder="Stacks project"
            errorMessage={error.stacks}
            disabled={data.stacks.length === 5}
          />
          <ul className="flex gap-2 mt-2">
            {data.stacks.map((stack, index) => (
              <li key={index.toString()} onDoubleClick={() => handleDeleteStack(index)} className="cursor-pointer">
                <TagLabel>{stack}</TagLabel>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button type="submit" className="mt-5" isLoading={loading} disabled={isChange}>
        {isEdit ? 'Update' : 'Create'}
      </Button>
    </form>
  );
}

FormProject.defaultProps = {
  initialData: null,
};

FormProject.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    stacks: PropTypes.array,
  }),
};
