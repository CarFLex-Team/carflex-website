import { useState } from "react";
import FormInput from "./FormComponents/FormInput";

export default function CustomerDetailsForm({
  postalCode,
  onSuccess,
  onClose,
}: {
  postalCode: string;
  onSuccess: () => void;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: boolean } = {};
    if (!name.trim()) newErrors.name = true;
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = true;
    if (!phone.trim() || !/^\d{10}$/.test(phone)) newErrors.phone = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    try {
      const response = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, postalCode }),
      });
      if (response.ok) {
        onSuccess();
      } else {
        alert("Failed to add customer. Please try again.");
      }
    } catch (error) {
      console.error("Error adding customer:", error);
      alert("An error occurred. Please try again.");
    }
  };
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
          className="px-6 py-3 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors cursor-pointer"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-3 rounded-md bg-primary-500 dark:bg-primary-600 text-white hover:bg-primary-500/90 dark:hover:bg-primary-600/90  font-medium transition-colors duration-300 cursor-pointer"
        >
          Get an Offer
        </button>
      </div>
    </form>
  );
}
