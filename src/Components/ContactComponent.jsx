import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactComponent = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    fetch("https://formsubmit.co/ajax/carolina.peseca@gmail.com", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Email sent successfully!");
          form.current.reset();
        } else {
          toast.error("Oops! Something went wrong.");
        }
      })
      .catch(() => toast.error("Oops! Something went wrong."));
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="h-2/ w-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-bold text-5xl mb-5">
          Let’s build your website together!
        </h1>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-4 shadow-xl rounded-xl mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="p-2 rounded-md shadow-xl font-bold"
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows="5"
            className="p-2 rounded-md shadow-xl font-bold"
          ></textarea>
          <button
            type="submit"
            className="sendButton text-white font-semibold p-2 rounded-md transition bg-orange-600 hover:bg-orange-700"
          >
            Send
          </button>

          {/* Campos ocultos para Formsubmit */}
          <input
            type="hidden"
            name="_subject"
            value="New message from your portfolio!"
          />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </>
  );
};

export default ContactComponent;
