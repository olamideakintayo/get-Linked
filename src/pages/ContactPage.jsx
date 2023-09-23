
const ContactPage = () => {
  return (
    <div>
      <div className="bg-page md:flex ">
        <div className="contact mt-8 md:mt-0 flex flex-col gap-4">
          <div className="title hidden md:block">
            <h1 className="font-body font-extrabold text-common">
              Get in touch
            </h1>

            <div className="">
              Contact<br></br>
              Information
            </div>
            <div className="break-normal">
              27,Alara Street Yaba 100012 Lagos State
            </div>
          </div>
          <div>Call Us: 07067981819</div>
          <div>we are open from Monday-Friday 08:00am - 05:00pm</div>
          <div className="text-common">
            Share on
          </div>
          
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="title font-title text-common font-bold">
            <p>Questions or need assistance?</p>
            <p className="subtitle">Let us know about it!</p>
          </div>
          <form className="flex flex-col   p-10 gap-4" action="">
            <input
              className="hidden md:block"
              type="text"
              placeholder="First Name"
            />
            <input
              className="md:hidden"
              type="text"
              placeholder="Team's Name"
            />
            <input
              className="md:hidden"
              type="text"
              name="topic"
              id="topic"
              placeholder="Topic"
            />
            <input
              className="hidden md:block"
              type="email"
              name="email"
              placeholder="Mail"
              id="email"
            />
            <input
              className="md:hidden"
              type="email"
              name="email"
              placeholder="Email"
              id="email"
            />

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>

            <button
              type="submit"
              className=" m-auto font-body w-[152px] h-[53px] rounded bg-gradient-to-r from-purple-600 to-pink-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
