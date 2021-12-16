import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Locations } from './Locations';
import Movies from './Movies';
import People from './People';

const Routings = () => {
  return (
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/movies' component={Movies} />
    <Route path="/people" component={People} />
    <Route path="/locations" component={Locations} />
    </Switch>
  );
};

export default Routings;
