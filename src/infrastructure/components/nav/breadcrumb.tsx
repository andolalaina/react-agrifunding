import Link, { LinkProps } from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {
  Link as RouterLink,
  useLocation,
} from 'react-router-dom';


const breadcrumbNameMap: { [key: string]: string } = {
  '/projects': 'Projets',
  '/submit-project': 'Soumettre un projet',
  '/settings': 'Paramètres'
};

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

export function NavBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ "marginBottom": "1rem" }}>
      <LinkRouter underline="hover" color="inherit" to="/">
        <Typography variant='h6'>Accueil</Typography>
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return last ? (
          <Typography key={to} sx={{ color: 'text.primary' }} variant='h6'>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to} variant='h6'>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
