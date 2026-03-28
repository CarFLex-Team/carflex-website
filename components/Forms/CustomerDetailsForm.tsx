import LoadingSpinner from "../LoadingSpinner";
import FormInput from "./FormComponents/FormInput";
import { ChevronLeftIcon } from "lucide-react";

export default function CustomerDetailsForm({
  onSuccess,
  onClose,
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
  errors,
  loading,
}: {
  onSuccess: () => void;
  onClose: () => void;
  name: string;
  email: string;
  phone: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
  errors: { [key: string]: boolean };
  loading: boolean;
}) {
  return (
    <form className="space-y-4">
      <FormInput
        value={name}
        onChange={setName}
        label="Full Name"
        placeholder="Your full name"
        error={errors.name}
      />
      <FormInput
        value={email}
        onChange={setEmail}
        label="Email"
        placeholder="your.email@example.com"
        error={errors.email}
      />
      <FormInput
        value={phone}
        onChange={setPhone}
        label="Phone Number"
        placeholder="123-456-7890"
        error={errors.phone}
        icon="+1"
      />
      <div className="flex justify-between flex-wrap gap-5">
        <button
          type="button"
          onClick={onClose}
          className="p-3 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors cursor-pointer"
        >
          <ChevronLeftIcon size={20} />
        </button>
        <button
          type="button"
          onClick={onSuccess}
          className="px-6 py-3 rounded-md bg-primary-500 dark:bg-primary-600 text-white hover:bg-primary-500/90 dark:hover:bg-primary-600/90  font-medium transition-colors duration-300 cursor-pointer"
        >
          {loading ? <LoadingSpinner /> : "Get an Offer"}
        </button>
      </div>
    </form>
  );
}
