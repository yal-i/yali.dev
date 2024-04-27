import type { ContactProps } from "~/types";

class ContactClient {
  async send(contact: ContactProps) {
    const { status } = await useFetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contact),
    });
    return status.value;
  }
}

export default ContactClient;
