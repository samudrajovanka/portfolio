import { useRouter } from 'next/router';

import ArrowDownIcon from '@icons/ic_arrow-down.svg';

export default function ButtonBack() {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  return (
    <button type="button" onClick={back} className="btn-back">
      <ArrowDownIcon />
      Back
    </button>
  );
}
