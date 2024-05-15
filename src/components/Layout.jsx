import { Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

import commonHelper from '../helpers/common';

/**
 * Layout component defines the base structure of the application.
 * It provides a header and a content area for nested components.
 *
 * @returns {JSX.Element} The Layout component JSX element.
 */
export default function Layout() {
  return (
    <div className="body">
      {/* Header */}
      <header className="header">
        <Container>
          <Row>
            <h1 className="text-center pt-3 pb-3">
              <Link to="/">{commonHelper.LAYOUT.HEADER}</Link>
            </h1>
          </Row>
        </Container>
      </header>

      {/* Content */}
      <div className="content-page">
        <Outlet />
      </div>
    </div>
  );
}
