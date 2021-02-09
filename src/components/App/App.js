import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

const App = ({ routes }) => (
  <Switch>
    {routes.map(({ path, exact, component: Component }) => (
      <Route
        key={path}
        exact={exact}
        path={path}
        render={(props) => <Component {...props} />}
      />
    ))}
  </Switch>
);

const routeShape = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape(routeShape)).isRequired,
};

export default App;
