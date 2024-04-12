import { useSelector } from 'react-redux';

import { isLoadingState, userData } from '@/store/slices/auth.slice.js';
import userImage from '@/assets/image/user-image.png';

export function Profile() {
  const user = useSelector(userData);
  const isLoading = useSelector(isLoadingState);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div className="profile">
      <div className="profile__header">Ваш профіль</div>

      <div className="profile__image">
        <img src={userImage} alt=""/>
      </div>

      <div className="profile__body">
        <ul className="profile__list">
          <li className="profile__item">
            <span className="profile__item-title">Admin id:</span>
            <span className="profile__item-text">{user?._id}</span>
          </li>
          <li className="profile__item">
            <span className="profile__item-title">Name:</span>
            <span className="profile__item-text">{user?.name}</span>
          </li>
          <li className="profile__item">
            <span className="profile__item-title">Address:</span>
            <span className="profile__item-text">{user?.address}</span>
          </li>
          <li className="profile__item">
            <span className="profile__item-title">Contact No.:</span>
            <span className="profile__item-text">{user?.contact}</span>
          </li>
          <li className="profile__item">
            <span className="profile__item-title">Email:</span>
            <span className="profile__item-text">{user?.email}</span>
          </li>
          <li className="profile__item">
            <span className="profile__item-title">Password:</span>
            <span className="profile__item-text">*****</span>
          </li>
        </ul>

        <button className="profile__button">Редагувати</button>
      </div>
    </div>
  );
}
