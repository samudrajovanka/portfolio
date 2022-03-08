import Button from '@components/elements/Button';
import Link from '@components/elements/Link';
import Table from '@components/elements/Table/Table';
import TableData from '@components/elements/Table/TableData';
import TableHead from '@components/elements/Table/TableHead';
import TableRow from '@components/elements/Table/TableRow';
import HeaderAdminCreatePage from '@components/parts/HeaderAdminPage';
import fetchAPI from '@lib/fetchApi';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ModalContext from '@contexts/ModalContext';
import uuid from 'react-uuid';

export default function SocialMediaAdminView({ data }) {
  const [dataSocialMedia, setDataSocialMedia] = useState(data);
  const modalCtx = useContext(ModalContext);

  const deleteSocialMedia = async (id) => {
    modalCtx.loading();

    const response = await fetchAPI(`/api/social-medias/${id}`, {
      method: 'DELETE',
    });

    modalCtx.stopLoading();
    if (response.success) {
      modalCtx.hideModal();
      toast.success('Social media has been deleted');

      setDataSocialMedia(dataSocialMedia.filter((item) => item._id !== id));
    } else {
      toast.error(response.message);
    }
  };

  const showModal = (id, name) => {
    modalCtx.showModal({
      title: 'Delete Social Media',
      description: `Are you sure you want to delete ${name}?`,
      onConfirm: () => deleteSocialMedia(id),
    });
  };

  return (
    <section className="container-admin my-5">
      <HeaderAdminCreatePage
        title="Social Medias"
        labelButton="New Social Media"
        hrefCreate="/admin/social-medias/create"
      />

      <Table className="mt-10">
        <thead>
          <TableRow>
            <TableHead className="min-w-[50px]">No</TableHead>
            <TableHead className="min-w-[200px]">Label</TableHead>
            <TableHead className="min-w-[50px]">Url</TableHead>
            <TableHead className="min-w-[100px]">Icon</TableHead>
            <TableHead width="200">Action</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {dataSocialMedia &&
            dataSocialMedia.map((item, index) => (
              <TableRow key={uuid()}>
                <TableData>{index + 1}</TableData>
                <TableData>{item.label}</TableData>
                <TableData>
                  <Link href={item.url} isExternal>
                    View
                  </Link>
                </TableData>
                <TableData>{item.icon}</TableData>
                <TableData>
                  <div className="flex gap-2">
                    <Button variant="warning" href={`/admin/social-medias/${item._id}/edit`} isBlock>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => showModal(item._id, item.label)}>
                      Delete
                    </Button>
                  </div>
                </TableData>
              </TableRow>
            ))}
        </tbody>
      </Table>
      {dataSocialMedia.length === 0 && <p className="text-center mt-3">No data</p>}
    </section>
  );
}

SocialMediaAdminView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
};
