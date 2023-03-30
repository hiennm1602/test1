import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img 
                    className={cx('avatar')} 
                    src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1680343200&x-signature=XcJrvxdXY5%2FruHFl4M4LfyXPNAM%3D'
                    alt=''
                />
                <Button className={cx('follow-btn')} primary>Follow</Button>

            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>mixigaming</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Độ Phùng</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>5M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>130.8M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;