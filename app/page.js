"use client"

import { ContactsModal, DeliveryCityModal, ESupportModal, MainContainer, SendingCodeModal, Sidebar } from "./components";
import { Chat, ESupport } from "./components/buttons";
import useChatModalStore from "./stores/ChatModalState";
import useESupportModalStore from "./stores/ESupportModalState";
import useDeliveryModalState from '@/app/stores/DeliveryCityModalState';

export default function Home() {
  
  const { isSupportModalOpen, isBeenOpened } = useESupportModalStore();
  const { isDeliveryModalOpen } = useDeliveryModalState();
  const { isChatModalOpen } = useChatModalStore();
  
  return (
    <>
      <div className="bg-gray-100 px-[6.5%] cursor-normal -mt-2">
        { !isSupportModalOpen && !isBeenOpened && <ESupport /> }
        { isDeliveryModalOpen && <DeliveryCityModal /> }
        <Chat />
        { isChatModalOpen && <ContactsModal /> }
        { isSupportModalOpen &&  <ESupportModal /> }
        <div className="flex flex-row gap-5 mt-2">
          <Sidebar />
          <MainContainer />
        </div>
      </div>
    </>
    
  );
}
