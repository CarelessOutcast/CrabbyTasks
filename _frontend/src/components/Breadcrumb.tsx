
/**************************************************************************
 * Component: Breadcrumb
 *
 * Logic: This file defines a React component that generates a breadcrumb
 * navigation element. It takes a 'pageName' prop and displays it as the current
 * page title. The breadcrumb also contains a link to the dashboard and the
 * current page name. The component's structure is designed with CSS classes for
 * styling and uses the 'react-router-dom' library for routing. It provides a
 * simple, flexible way to include breadcrumbs in web pages. 
 *
 * Type: Component
*************************************************************************/

import { Link } from 'react-router-dom';
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/">Dashboard /</Link>
          </li>
          <li className="text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
