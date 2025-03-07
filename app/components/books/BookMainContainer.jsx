import React from 'react'
import { BookDescription, BookImages, OrderInfo} from '.'
import useBookImagesModalStore from '@/app/stores/BookImagesModalState'
import useDeliveryModalState from '@/app/stores/DeliveryCityModalState'
import useLoginModalStore from '@/app/stores/LoginModalState';
import { BookImagesModal, DeliveryCityModal } from '../shared'
import { LoginModal } from '../shared/modals/LoginModal';

export const BookMainContainer = () => {

  const { isBookImagesModalOpen } = useBookImagesModalStore()
  const { isLoginModalOpen  } = useLoginModalStore()
  const { isDeliveryModalOpen } = useDeliveryModalState();

  return (
    <div className="w-full flex flex-row gap-4 relative">
      <BookImages />
      <BookDescription />
      <OrderInfo />
      { isBookImagesModalOpen && <BookImagesModal /> }
      { isLoginModalOpen && <LoginModal /> }
      { isDeliveryModalOpen && <DeliveryCityModal /> }
    </div>
  )
}
