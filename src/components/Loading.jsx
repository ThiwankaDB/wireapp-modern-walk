import { Spinner } from 'react-bootstrap';

import commonHelper from '../helpers/common';

/**
 * Functional component that renders a loading indicator using a Bootstrap Spinner.
 *
 * @returns {JSX.Element} - The loading indicator component.
 */
export default function Loading() {
  return (
    <div className="loading d-flex align-items-center justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">{commonHelper.LOADING_TEXT}</span>
      </Spinner>
    </div>
  );
}
