import Button from '@components/elements/Button';
import Table from '@components/elements/Table/Table';
import TableData from '@components/elements/Table/TableData';
import TableHead from '@components/elements/Table/TableHead';
import TableRow from '@components/elements/Table/TableRow';
import HeaderAdminCreatePage from '@components/parts/HeaderAdminPage';
import ModalContext from '@contexts/ModalContext';
import fetchAPI from '@lib/fetchApi';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

export default function ExperiencesAdminView({ data }) {
  const [dataExperiences, setDataExperiences] = useState(data);
  const modalCtx = useContext(ModalContext);

  const deleteExperience = async (id) => {
    modalCtx.loading();

    const response = await fetchAPI(`/api/experiences/${id}`, {
      method: 'DELETE',
    });

    modalCtx.stopLoading();
    if (response.success) {
      modalCtx.hideModal();
      toast.success('Experience has been deleted');

      setDataExperiences(dataExperiences.filter((item) => item._id !== id));
    } else {
      toast.error(response.message);
    }
  };

  const showModal = (id, name) => {
    modalCtx.showModal({
      title: 'Delete Project',
      description: `Are you sure you want to delete ${name}?`,
      onConfirm: () => deleteExperience(id),
    });
  };

  return (
    <section className="container-admin my-5">
      <HeaderAdminCreatePage title="Experiences" labelButton="New Experience" hrefCreate="/admin/experiences/create" />

      <Table className="mt-10">
        <thead>
          <TableRow>
            <TableHead className="min-w-[50px]">No</TableHead>
            <TableHead className="min-w-[100px]">Company</TableHead>
            <TableHead className="min-w-[50px]">Duration</TableHead>
            <TableHead className="min-w-[100px]">Position</TableHead>
            <TableHead className="min-w-[100px]">Type</TableHead>
            <TableHead className="min-w-[100px]">Stacks</TableHead>
            <TableHead width="200">Action</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {dataExperiences &&
            dataExperiences.map((item, index) => (
              <TableRow key={uuid()}>
                <TableData>{index + 1}</TableData>
                <TableData>{item.company}</TableData>
                <TableData>
                  {moment(item.startMonth).format('MMM YYYY')} - {moment(item.endMonth).format('MMM YYYY')}
                </TableData>
                <TableData>{item.position}</TableData>
                <TableData>{item.type}</TableData>
                <TableData>{item.stacks.join(', ')}</TableData>
                <TableData>
                  <div className="flex gap-2">
                    <Button variant="warning" href={`/admin/experiences/${item._id}/edit`} isBlock>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => showModal(item._id, item.company)}>
                      Delete
                    </Button>
                  </div>
                </TableData>
              </TableRow>
            ))}
        </tbody>
      </Table>
      {dataExperiences.length === 0 && <p className="text-center mt-3">No data</p>}
    </section>
  );
}

ExperiencesAdminView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      startMonth: PropTypes.string.isRequired,
      endMonth: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
