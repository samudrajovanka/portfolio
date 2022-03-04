import Button from '@components/elements/Button';
import Input from '@components/elements/Input/Input';
import Select from '@components/elements/Input/Select';
import TagLabel from '@components/elements/TagLabel';
import { OPTIONS_EXPERIENCE } from '@constants/data';
import { isObjEmpty } from '@lib/check';
import fetchAPI from '@lib/fetchApi';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export default function FormExperience({ initialData }) {
  const [data, setData] = useState({
    company: initialData?.company ?? '',
    startMonth: initialData?.startMonth ? moment(initialData.startMonth).format('YYYY-MM') : '',
    endMonth: initialData?.endMonth ? moment(initialData.endMonth).format('YYYY-MM') : '',
    position: initialData?.position ?? '',
    type: initialData?.type ? OPTIONS_EXPERIENCE.filter((opt) => opt.value === initialData.type)[0] : {},
    stack: '',
    stacks: initialData?.stacks ?? [],
  });

  const [error, setError] = useState({
    company: '',
    startMonth: '',
    endMonth: '',
    position: '',
    type: '',
    stacks: '',
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isEdit = !!initialData;

  const isChange = initialData
    ? data.company === initialData.company &&
      data.startMonth === moment(initialData.startMonth).format('YYYY-MM') &&
      data.endMonth === moment(initialData.endMonth).format('YYYY-MM') &&
      data.position === initialData.position &&
      data.type?.value === initialData.type &&
      data.stacks === initialData.stacks
    : null;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const handleChangeSelect = (option) => {
    setData({ ...data, type: option });
    setError({ ...error, type: '' });
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

  const clearError = () => {
    setError({
      company: '',
      startMonth: '',
      endMonth: '',
      position: '',
      type: '',
      stacks: '',
    });
  };

  const validateForm = () => {
    const { company, startMonth, endMonth, position, type, stacks } = data;

    const errors = {};
    let isValid = true;

    if (!company) {
      errors.company = 'Company is required';
      isValid = false;
    } else if (company.length > 100) {
      errors.company = 'company is too long';
      isValid = false;
    }

    if (!startMonth) {
      errors.startMonth = 'Start date is required';
      isValid = false;
    }

    if (!endMonth) {
      errors.endMonth = 'End date is required';
      isValid = false;
    }

    if (!position) {
      errors.position = 'Position is required';
      isValid = false;
    }

    if (isObjEmpty(type)) {
      errors.type = 'Type is required';
      isValid = false;
    }

    if (stacks.length === 0) {
      errors.stacks = 'Stacks must be at least 1';
      isValid = false;
    }

    setError({ ...error, ...errors });

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    clearError();

    if (validateForm()) {
      const endPoint = isEdit ? `/api/experiences/${initialData._id}` : '/api/experiences';
      const result = await fetchAPI(endPoint, {
        method: isEdit ? 'PUT' : 'POST',
        body: {
          ...data,
          type: data.type.value,
        },
      });

      setLoading(false);

      if (result.success) {
        const message = isEdit ? 'Experience has been updated' : 'Experience has been added';
        toast.success(message);
        router.replace('/admin/experiences');
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
          label="Company Name"
          id="company"
          value={data.company}
          required
          onChange={handleChangeInput}
          name="company"
          placeholder="Company name"
          errorMessage={error.company}
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 lg:col-span-1">
            <Input
              type="month"
              label="Start Month"
              id="startMonth"
              value={data.startMonth}
              required
              onChange={handleChangeInput}
              name="startMonth"
              placeholder="Start month"
              errorMessage={error.startMonth}
              max={data.endMonth}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Input
              type="month"
              label="End Month"
              id="endMonth"
              value={data.endMonth}
              required
              onChange={handleChangeInput}
              name="endMonth"
              placeholder="End month"
              errorMessage={error.endMonth}
              min={data.startMonth}
            />
          </div>
        </div>
        <Input
          label="Position"
          id="position"
          value={data.position}
          required
          onChange={handleChangeInput}
          name="position"
          placeholder="Position"
          errorMessage={error.position}
        />
        <Select
          options={OPTIONS_EXPERIENCE}
          label="Type"
          placeholder="Types experience"
          onClickOption={handleChangeSelect}
          errorMessage={error.type}
          defaultValue={data.type}
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

FormExperience.defaultProps = {
  initialData: null,
};

FormExperience.propTypes = {
  initialData: PropTypes.shape({
    company: PropTypes.string,
    startMonth: PropTypes.string,
    endMonth: PropTypes.string,
    position: PropTypes.string,
    type: PropTypes.string,
    stacks: PropTypes.arrayOf(PropTypes.string),
  }),
};
