import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <Dialog.Title className="text-lg font-semibold text-gray-900">Contact Me</Dialog.Title>
            <p className="mt-2 text-gray-600">You can reach me via email at:</p>
            <a href="mailto:dhanushdhanu00000@gmail.com" className="text-blue-500 underline">
              dhanushdhanu00000@gmail.com
            </a>
            <button onClick={onClose} className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactModal;
