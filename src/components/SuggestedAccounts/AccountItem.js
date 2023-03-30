import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview';


const cx = classNames.bind(styles)
function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex= '-1'  {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>

            </div>
        )
    }
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-20,0]}
                placement='bottom'
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1680343200&x-signature=XcJrvxdXY5%2FruHFl4M4LfyXPNAM%3D'
                        alt=''

                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>mixigaming</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Độ Phùng</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );

}

// AccountItem.propTypes = {

// }


export default AccountItem;