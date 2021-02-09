import Show from './pages/Show';
import Episode from './pages/Episode';

export default [
  {
    path: '/shows/:show_id',
    exact: true,
    component: Show,
  },
  {
    path: '/shows/:show_id/episodes/:episode_id',
    exact: true,
    component: Episode,
  },
];
