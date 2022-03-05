import Button from '@components/elements/Button';
import Link from '@components/elements/Link';
import Table from '@components/elements/Table/Table';
import TableData from '@components/elements/Table/TableData';
import TableHead from '@components/elements/Table/TableHead';
import TableRow from '@components/elements/Table/TableRow';
import HeaderAdminCreatePage from '@components/parts/HeaderAdminPage';
import ModalContext from '@contexts/ModalContext';
import fetchAPI from '@lib/fetchApi';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export default function ProjectAdminView({ data }) {
  const [dataProject, setDataProject] = useState(data);
  const modalCtx = useContext(ModalContext);

  const deleteProject = async (id) => {
    modalCtx.loading();

    const response = await fetchAPI(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    modalCtx.stopLoading();
    if (response.success) {
      modalCtx.hideModal();
      toast.success('Project has been deleted');

      setDataProject(dataProject.filter((item) => item._id !== id));
    } else {
      toast.error(response.message);
    }
  };

  const showModal = (id, name) => {
    modalCtx.showModal({
      title: 'Delete Project',
      description: `Are you sure you want to delete ${name}?`,
      onConfirm: () => deleteProject(id),
    });
  };

  return (
    <section className="container-admin my-5">
      <HeaderAdminCreatePage title="Projects" labelButton="New Project" hrefCreate="/admin/projects/create" />

      <Table className="mt-10">
        <thead>
          <TableRow>
            <TableHead className="min-w-[50px]">No</TableHead>
            <TableHead className="min-w-[100px]">Name</TableHead>
            <TableHead className="min-w-[50px]">Url</TableHead>
            <TableHead className="min-w-[100px]">Stacks</TableHead>
            <TableHead width="200">Action</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {dataProject &&
            dataProject.map((item, index) => (
              <TableRow key={index.toString()}>
                <TableData>{index + 1}</TableData>
                <TableData>{item.name}</TableData>
                <TableData>
                  <Link href={item.url} isExternal>
                    View
                  </Link>
                </TableData>
                <TableData>{item.stacks.join(', ')}</TableData>
                <TableData>
                  <div className="flex gap-2">
                    <Button variant="warning" href={`/admin/projects/${item._id}/edit`} isBlock>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => showModal(item._id, item.name)}>
                      Delete
                    </Button>
                  </div>
                </TableData>
              </TableRow>
            ))}
        </tbody>
      </Table>
      {dataProject.length === 0 && <p className="text-center mt-3">No data</p>}
    </section>
  );
}

ProjectAdminView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
      stacks: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};
