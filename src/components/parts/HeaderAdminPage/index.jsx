import Button from '@components/elements/Button';
import PropTypes from 'prop-types';

export default function HeaderAdminCreatePage({ title, hrefCreate, labelButton }) {
  return (
    <div className="header-admin-create">
      <h1 className="heading-3">{title}</h1>
      <Button href={hrefCreate}>{labelButton ?? `New ${title}`}</Button>
    </div>
  );
}

HeaderAdminCreatePage.defaultProps = {
  labelButton: null,
};

HeaderAdminCreatePage.propTypes = {
  title: PropTypes.string.isRequired,
  hrefCreate: PropTypes.string.isRequired,
  labelButton: PropTypes.string,
};
