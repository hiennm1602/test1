import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import Menu, {MenuItem} from './Menu';
import config from '~/config';
import { ExploreIcon, HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';

const cx = classNames.bind(styles)

function Sidebar() {
    return ( 
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title='For You' to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title='Following' to={config.routes.following} icon={<UserGroupIcon />}  />
                <MenuItem title='Explore' to={config.routes.explore} icon={<ExploreIcon />}  />
                <MenuItem title='LIVE' to={config.routes.live} icon={<LiveIcon />}  />
            </Menu>
        </aside>
     );
}

export default Sidebar;